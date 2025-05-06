import express from 'express'
import {session_router} from "./session_routes.js"
import {education_router} from "./education_routes.js"
import {consultant_router} from './consultant_routes.js'
import {survey_router} from './survey_routes.js'

const router = express.Router()

router.use("/session", session_router)
router.use("/consultants", consultant_router)
router.use("/education", education_router)
router.use("/survey", survey_router)



//If user refresh the browser based on route != index.html this will providde the index.html and react will take navigation control.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

export { router }