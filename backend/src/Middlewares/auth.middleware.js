import jwt from "jsonwebtoken";
import User from "../Models/user.models.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password -provider");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; // attach user data to request object
        console.log(user);
        next();

    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const veryfiAdmin = async (req, res, next) => {
    try {
        const user = req.user;

        if(user && user.role === "Admin"){
            next();
        } else {
            return res.status(401).json({ message: "Access denied. Admins only." });
        }
        
    } catch (error) {
        console.log(`Error in veryfy admin: ${error}`);
        res.status(401).json({ message: "Not authorized" });
    }
}
