import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
    const handleLogin = async (e) => {
       e.preventDefault();
       try {
           const response = await axios.post(
               'http://localhost:3000/api/v1/login', 
               { email, password },
               { 
                   withCredentials: true,
                   headers: {
                       'Content-Type': 'application/json',
                   }
               }
           );
           
           if (response.data.success) {
               // Handle successful login, e.g., save token, redirect, etc.
               console.log('Login successful:', response.data);
           } else {
               setError('Invalid email or password');
           }
       } catch (err) {
           setError(err.response?.data?.message || 'An error occurred. Please try again.');
           console.error(err);
       }
   };
    return (
       <div className="login-container">
           <h2>Login</h2>
           <form onSubmit={handleLogin} className="login-form">
               <div className="form-group">
                   <label>Email:</label>
                   <input
                       type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       className="form-input"
                       placeholder="Enter your email"
                   />
               </div>
               <div className="form-group">
                   <label>Password:</label>
                   <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       className="form-input"
                       placeholder="Enter your password"
                   />
               </div>
               {error && <p className="error-message">{error}</p>}
               <button type="submit" className="login-button">Login</button>
           </form>
       </div>
   );
};
export default Login;