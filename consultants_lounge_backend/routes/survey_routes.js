import express from 'express';
import * as survey_controls from '../controls/survey_controls.js';
import { authenticate_user } from '../controls/middlewares/authentication.js';
import { require_role } from '../controls/middlewares/authorization.js';

export const survey_router = express.Router();

// Submit survey response (accessible to all)
survey_router.post('/submit', survey_controls.submitSurvey);

// Get survey responses (admin only)
survey_router.get('/responses', 
    authenticate_user, 
    require_role(['Admin']), 
    survey_controls.getSurveyResponses
); 