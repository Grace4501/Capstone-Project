export const authenticate_user = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({success: false,  message: "Unauthorized: Login required" });
};
