import express from 'express';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library'
import { generateToken } from '../lib/utils.js';
import User from '../Models/user.models.js';


export const googleAuth = async (req, res) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_SECRET);
    try {
        const { token } = req.body;
        //veryfing google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_SECRET
        });

        const payload = ticket.getPayload();
        const { email, name, picture } = payload;

        //check user exist or not
        let user = await User.findOne({ email: payload.email });

        //if user doesnt exist, create new onw
        if(!user) {
            user = await User.create({
                username: name,
                email: email,
                profilePic: picture || ""
            });
        }
        //Generate Token
        const appToken = generateToken(user._id, res);

        //send responce
        console.log({message: "Loggin successfully"});
        res.status(201).json({
            success: true,
            token: appToken,
            user: {
                _id: user._id,
                username: user.name,
                email: user.email,
                profilePic: user.picture
            }
        });



    } catch (error) {
        console.log({message: "Error in google Auth"});
        res.status(401).json({message: "Google auth failed"});
    }

}

export const signup = async (req, res) => {
    const { username, email, number, password, role } = req.body;
    const userRole = role || "Customer";
    try {

        if (password.length < 6) {
            return res.status(400).send({ message: "password must be at least 6 characters" });
        }
        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({
            username,
            email,
            role: userRole,
            number,
            password: hashedPassword
        });

        // Generate token
        const token = generateToken(newUser._id, res);

        res.status(201).json({ newUser, token });
        console.log({ message: newUser });
    } catch (error) {
        console.log({ message: `Something went wrong ${error}` });
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id, res);
        console.log({ message: "Login successful", user });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.log({ message: `Error in Login ${error}` });
        res.status(500).json({ message: "Internal server error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: process.env.NODE_ENV !== "development",
            sameSite: "Strict"
        });

        res.status(200).json({ message: "Logout successful" });
        console.log({ message: "Logout successful" });
    } catch (error) {
        console.log({ message: `Error in Logout ${error}` });
        res.status(500).json({ message: "Internal server error" });
    }
}
