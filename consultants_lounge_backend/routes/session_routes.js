
import express from 'express'
import * as session_controls from '../controls/session_controls.js'
import * as testing_controls from '../controls/testing_controls.js'
import { authenticate_user } from '../controls/middlewares/authentication.js' 

export const session_router = express.Router()

//Login implemented with passport middleware
//React front end is responsible for redirection
session_router.post('/register', session_controls.user_register) //User registration activity can be tracked directly with the users collection.
session_router.post("/login", session_controls.user_login)
session_router.get('/logout', authenticate_user, session_controls.user_logout)


//Testing actions...
session_router.put('/reset/dummyusers', testing_controls.reset_dummy_users)
session_router.get('/dashboard',testing_controls.show_dashboard)
session_router.get('/clear-session-log',testing_controls.clear_session_logs)