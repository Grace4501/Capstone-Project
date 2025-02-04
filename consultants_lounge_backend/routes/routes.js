import express from 'express'
import {session_router} from "./session_routes.js"

export const router = express.Router()
router.use("/session", session_router)