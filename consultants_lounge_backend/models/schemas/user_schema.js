import mongoose from "mongoose"

const user_schema = new mongoose.Schema({
    first_name: {type: String, required: true, trim: true},
    middle_name: {type: String, required: false, trim: true},
    last_name: {type: String, required: true, trim: true},
    email: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: {type: String, required: true, minlength: 6},
    phone: {
        type: String, 
        required: true,
        match: [/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number']
    },
    role: { 
        type: String, 
        enum: ["client", "consultant", "administrator"], 
        required: true,
        default: "client"
    }
}, { timestamps: true });
  
 export const User = mongoose.model('User', user_schema);
  
