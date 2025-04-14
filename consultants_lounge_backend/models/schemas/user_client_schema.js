import mongoose from "mongoose";

const client_schema = new mongoose.Schema({
    info: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User schema
    business_name: { type: String, required: true },
    business_description: { type: String, maxlength: 1000 }, // Max 1000 characters
});

export const Client = mongoose.model('Client', client_schema);
