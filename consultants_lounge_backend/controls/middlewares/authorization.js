export function require_role(allowed_roles) {
    return function(req, res, next) {
        if (!req.user) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden: Authentication required.'
            });
        }

        if (allowed_roles.includes(req.user.info.role)) {
            return next();
        }

        return res.status(403).json({
            success: false,
            message: 'Forbidden: Access denied.'
        });
    };
}
  