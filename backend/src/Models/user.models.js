import mongoose, { mongo } from "mongoose";

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
    },
    address: {
        type: [mongoose.Types.ObjectId],
        ref: "Address"
    },
    bio: {
        type: String,
        trim: true,
        default: ""
    },
    gallery: [
        {
            url: {
                type: String,
                required: true

            },
            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    cart: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1
            },
            addedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    order: [
        {
            orderId: {
                type: String
            },
            product: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number
            },
            price: {
                type: Number
            },
            status: {
                type: String,
                default: "pending"
            },
            orderAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

    posts: [
        {
            image: {
                type: String,

            },
            caption: {
                type: String
            },
            likes: {
                type: Number,
                default: 0
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    stats: {
        totalUploads: {
            type: Number,
            default: 0
        },
        totalOrders: {
            type: Number,
            default: 0
        },
        totalPosts: {
            type: Number,
            default: 0
        }
    },
    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },
    password: {
        type: String,
        minLength: 6
    },
    profilePic: {
        type: String,
        trm: true
    },
    role: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer"
    },

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;