
import express from 'express'
import * as session_controls from '../controls/session_controls.js'

export const session_router = express.Router()
router.post('/login', session_controls.user_login)
router.post('/register', session_controls.user_register)
router.get('/logout',session_controls.user_logout)