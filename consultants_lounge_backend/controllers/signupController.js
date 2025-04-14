import { User } from '../models/schemas/user_schema.js';

export const signupController = async (req, res) => {
    try {
        const { first_name, middle_name, last_name, email, password, phone, role } = req.body;

        // Create a new user
        const newUser = new User({
            first_name,
            middle_name,
            last_name,
            email,
            password,
            phone,
            role
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: newUser
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}; 