import mongoose from "mongoose"

const user_schema = new mongoose.Schema({
    first_name: {type: String, required: true},
    middle_name: {type: String, required: false},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
  });
  
 export const User = mongoose.model('User', user_schema);
  