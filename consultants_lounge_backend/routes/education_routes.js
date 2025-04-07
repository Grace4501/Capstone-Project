
import express from 'express'
import * as testing_controls from '../controls/testing_controls.js'
import * as tracking_controls from '../controls/middlewares/tracker.js'

export const education_router = express.Router()

education_router.get('/books', (req,res)=>{
    console.log("--\nBooks were looked at by user_id: ", req.sessionID)
    let education = {book_glance : true}  
    req.session.activity = education
    res.json({message: "Books!"})
}) 