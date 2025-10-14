import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    label: {                 // typo "lable" → "label"
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
    state: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        default: "India"
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
}, { _id: true });  // _id: true is default, can even omit

const Address = mongoose.model("Address", addressSchema);
export default Address;
