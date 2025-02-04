import jwt from 'jsonwebtoken';


// Function to generate a JWT token for the authenticated user
export const generateToken = (user) => {
  // Create a token payload using user information
  return jwt.sign(
    {roleID: user.RoleID},
    process.env.JWT_SECRET,                        // Sign the token with the secret key
    { expiresIn: process.env.JWT_EXPIRES_IN }       // Set token expiration time
  );
};

