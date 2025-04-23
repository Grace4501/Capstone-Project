import mongoose from "mongoose"

const surveyResponseSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: false // Allow anonymous responses
    },
    surveyType: {
        type: String,
        enum: ['Consultant', 'Business Owner'],
        required: true
    },
    answers: {
        type: Map,
        of: mongoose.Schema.Types.Mixed, // Allows for different types of answers (string, array, etc.)
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema); 