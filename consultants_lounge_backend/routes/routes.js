import express from 'express'
import {session_router} from "./session_routes.js"
import { User } from '../models/schemas/user_schema.js'

export const router = express.Router()

router.use("/session", session_router)

//If user refresh the browser based on route != index.html this will providde the index.html and react will take navigation control.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// Add a test log to verify route is registered
router.post('/session/signup', async (req, res) => {
    console.log('Signup route hit:', req.body); // Debug log
    
    try {
        const { first_name, last_name, email, password, phone, role } = req.body;

        // Create new user
        const user = await User.create({
            first_name,
            last_name,
            email,
            password,
            phone,
            role: role || 'client'
        });

        // Start session
        req.session.userId = user._id;

        res.status(201).json({
            success: true,
            data: user
        });

    } catch (error) {
        console.error('Signup error:', error); // Debug log
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Add a test route to verify router is working
router.get('/test', (req, res) => {
    res.json({ message: 'Test route working' });
});