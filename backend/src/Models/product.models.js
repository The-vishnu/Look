import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        default: 0
    },

    images: {
        type: [String],
        default: ["https://via.placeholder.com/150"]
    },

    brand: {
        type: String
    },

    rating: {
        type: Number,
        default: 0
    },

    numOfReviews: {
        type: Number,
        default: 0
    },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    sku: {
        type: String,
        required: true,
        unique: true
    },

    tags: {
        type: [String],
        default: []
    }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
