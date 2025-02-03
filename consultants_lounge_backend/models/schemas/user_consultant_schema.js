import mongoose from "mongoose"
import {languages_options} from "../../utils/select_options"

const consultant_schema = new mongoose.Schema({
    user_info: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User schema
    expertise_areas: { type: String, required: true },
    availability_status: { type: String, enum: ['Available', 'Unavailable'], required: true },
    languages: { type: String, enum: languages_options },
    description: { type: String },
    employment_history: { type: String },
    education: { type: String },
  });
  
  export const Consultant = mongoose.model('Consultant', consultant_schema);