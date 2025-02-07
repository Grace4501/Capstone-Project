import './Login.css';
import logoBackground from '../resources/LogoBackground.jpg';
import googleLogo from '../resources/GoogleLogo.png';
import { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/session/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle successful login (e.g., redirect)
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="Login">
            {/* Logo */}
            <div style={{
              /* Styling a background for the logo*/
                backgroundImage: `url(${logoBackground})`, backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="logo-container">
                <h1> Company </h1>
                <h5> Logo </h5>
            </div>
                {/* Form */}
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4> Welcome Back </h4>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="buttons">
                        <button className="login-button"> LOGIN </button>
                        <button className="google"> <img src={googleLogo} alt='GoogleLogo'></img>SIGN UP WITH GOOGLE </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

