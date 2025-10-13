import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    number: {
        type: Number,
        required: true,
    },
    provider: {
        type: String,
        enum: ["local", "google"], 
        default: "local"
    },

    password: {
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;