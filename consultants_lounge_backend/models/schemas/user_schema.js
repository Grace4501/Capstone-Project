import mongoose from "mongoose"

const user_schema = new mongoose.Schema({
    first_name: {type: String, required: true},
    middle_name: {type: String, required: false},
    last_name: {type: String, required: true},
    email: {type: String, unique: true ,required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    role: { type: String, enum: ["client", "consultant", "administrator"], required: true }
  }, { timestamps: true });
  
 export const User = mongoose.model('User', user_schema);
  
