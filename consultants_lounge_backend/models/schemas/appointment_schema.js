import mongoose from "mongoose"


  // Appointment schema
const appointment_schema = new mongoose.Schema({
    consultant: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required : true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    date: Date,
    startTime: Date,
    endTime: Date,
    durationMinutes: Number,
    status: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'] },
    meetingType: String,
    location: String,
    notes: String,
    cancellationReason: String,
    attachments: [Object],
  });
 export const Appointment = mongoose.model('Appointment', appointment_schema);
  