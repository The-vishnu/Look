import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    comments: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
        max: 5,
        default: 0
    }


}, {timestamps: true});

const Review = mongoose.model("Review", reviewSchema);

export default Review;