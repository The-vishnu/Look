import mongoose, { Types } from "mongoose";

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    lable: {
        type: String,
        trim: true,
        default: "home"
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        default: "india"
    },
    landmark: {
        type: String,
        trim: true
    },
    postalCode: {
        type: String,
        required: true,
        trim: true
    },
    isDefault: {
        type: Boolean,
        default: true
    }


}, { _id: true });

const Address = mongoose.model("Address", addressSchema);
export default Address;