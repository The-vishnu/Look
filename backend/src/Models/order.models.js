import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true
    },
    product: [{
        products: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    shippingAddress: {
        type: mongoose.Types.ObjectId,
        ref: "Address",
        required: true,
        trim: true
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ["UPI", "card", "cash on Delivery"],
        default: "UPI"
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Pending"
    },
    enterpriseName: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;