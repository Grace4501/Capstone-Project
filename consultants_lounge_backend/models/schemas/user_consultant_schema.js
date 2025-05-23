import mongoose from "mongoose"
import {languages_options} from "../../utils/select_options.js"


const consultant_schema = new mongoose.Schema({
    info: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User schema
    expertise_areas: { type: String, required: true },
    availability_status: { type: String, enum: ['Available', 'Unavailable'], required: true },
    languages: { type: String, enum: languages_options },
    description: { type: String },
    employment_history: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employment", default: [] }],
    education: { type: String },
  });
  
  export const Consultant = mongoose.model('Consultant', consultant_schema);