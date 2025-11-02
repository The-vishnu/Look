import express from 'express';
import bcrypt from 'bcryptjs';
// import { OAuth2Client } from 'google-auth-library';
import { generateToken } from '../lib/utils.js';
import User from '../Models/user.models.js';

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("✅ Verified Payload:", payload);

    const { email, name, picture } = payload;

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        username: name,
        email,
        profilePic: picture || "",
      });
    }

    // Generate and set cookie token
    const appToken = generateToken(user._id, res);

    console.log("🎉 Google Login successful:", user.username);

    // Send user data (token already in cookie)
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error("❌ Error in Google Auth:", error.message);
    res.status(401).json({ message: "Google auth failed", error: error.message });
  }
};


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


export const checkAuth = (req, res) => {
    try {
        console.log("CheckAuth reached ✅");
        console.log("User inside req:", req.user);
        res.status(201).json(req.user);
    } catch (error) {
        console.log({message: "error in check Auth controller: ", error});
        res.status(401).json({message: "Error in Auth controller"});
    }
}
