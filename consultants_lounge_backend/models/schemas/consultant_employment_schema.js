import mongoose from "mongoose"

const employment_schema = new mongoose.Schema({
    company: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    title: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date }, // Optional, null if currently working
    description: { type: String }
  });

  export const Employment = mongoose.model("Employment", employment_schema);