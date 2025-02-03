
import express from 'express'
import * as session_controls from '../controls/session_controls.js'


export const session_router = express.Router()

session_router.post('/login', session_controls.user_login)
session_router.post('/register', session_controls.user_register)
session_router.get('/logout',session_controls.user_logout)

//Testing actions...
session_router.post('/register/dummyusers', session_controls.register_dummy_users)
session_router.put('/reset/dummyusers', session_controls.reset_dummy_users)

