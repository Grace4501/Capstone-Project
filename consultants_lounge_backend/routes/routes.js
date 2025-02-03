import express from 'express'
import {session_router} from "./session_routes.js"
import {consultant_router} from "./consultant_routes.js"
import {client_router} from "./client_routes.js"
import {appointment_router} from "./appointment_routes.js"


export const router = express.Router()
router.use("/session", session_router)