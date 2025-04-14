export function require_role(req, res, next) {

    if (req.user && req.user.info.role === "Consultant") 
        return next();
    
    return res.status(403).json({success: false,  message: 'Forbidden: Access denied.' });

}
  