import jwt from 'jsonwebtoken';
import { User } from '../models/schemas/user_schema.js';

export const protect = async (req, res, next) => {
    try {
        // Check if session exists
        if (!req.session || !req.session.userId) {
            return res.status(401).json({
                success: false,
                error: 'Not authorized to access this route'
            });
        }

        // Get user from session
        const user = await User.findById(req.session.userId).select('-password');
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'User not found'
            });
        }

        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            error: 'Not authorized to access this route'
        });
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: 'User role is not authorized to access this route'
            });
        }
        next();
    };
}; 