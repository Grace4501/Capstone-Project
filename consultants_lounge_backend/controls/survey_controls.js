import { SurveyResponse } from '../models/schemas/survey_schema.js';

export const submitSurvey = async (req, res) => {
    try {
        const { surveyType, answers } = req.body;
        
        // Add user ID if user is logged in
        const userId = req.user ? req.user._id : null;
        
        const surveyResponse = new SurveyResponse({
            userId,
            surveyType,
            answers
        });

        await surveyResponse.save();

        res.status(201).json({
            success: true,
            message: "Survey submitted successfully"
        });
    } catch (error) {
        console.error('Error submitting survey:', error);
        res.status(500).json({
            success: false,
            message: "Error submitting survey",
            error: error.message
        });
    }
};

export const getSurveyResponses = async (req, res) => {
    try {
        // Only allow admin users to access this endpoint
        if (!req.user || req.user.role !== 'Admin') {
            return res.status(403).json({
                success: false,
                message: "Unauthorized access"
            });
        }

        const responses = await SurveyResponse.find()
            .populate('userId', 'email first_name last_name')
            .sort('-submittedAt');

        res.status(200).json({
            success: true,
            data: responses
        });
    } catch (error) {
        console.error('Error fetching survey responses:', error);
        res.status(500).json({
            success: false,
            message: "Error fetching survey responses",
            error: error.message
        });
    }
}; 