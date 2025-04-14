import express from 'express'
import * as consultant_controls from '../controls/consultant_controls.js'
import { authenticate_user } from '../controls/middlewares/authentication.js' 
import { require_role } from '../controls/middlewares/authorization.js' 

export const consultant_router = express.Router()

consultant_router.post('/:consultantId/add-employment', authenticate_user, require_role, consultant_controls.add_employment)
// consultant_router.post('/:consultantId/add-overview', authenticate_user, require_role, consultant_controls.add_overview)
// consultant_router.post('/:consultantId/add-education', authenticate_user, require_role, consultant_controls.add_education)
// consultant_router.post('/:consultantId/add-skills', authenticate_user, require_role, consultant_controls.add_skills)