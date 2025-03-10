import './Signup.css';
import logoBackground from '../resources/LogoBackground.jpg';
//import googleLogo from '../../public/resources/GoogleLogo.png';
import { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '', // Added middle name field
        last_name: '',
        email: '',
        password: '',
        phone: '',
        role: 'client' // Default role
    });

    const [error, setError] = useState(null); // Add state for error handling

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/v1/session/register', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Signup successful");
                // Redirect or show success message
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Signup failed");
            }
        } catch (error) {
            setError('Signup error: ' + error.message);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="Signup">
            <div 
                className="logo-container" 
                style={{
                    backgroundImage: `url(${logoBackground})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <h1> Company </h1>
                <h5> Logo </h5>
            </div>
            
            <div className="form-container">
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <form onSubmit={handleSubmit}>
                    <h4> Create Your Account </h4>
                    
                    <div>
                        <label>First Name:</label>
                        <input 
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Middle Name:</label>
                        <input 
                            type="text"
                            name="middle_name"
                            value={formData.middle_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input 
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Phone:</label>
                        <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>

                    <div>
                        <label>Role:</label>
                        <select name="role" value={formData.role} onChange={handleChange} required>
                            <option value="client">Client</option>
                            <option value="consultant">Consultant</option>
                            <option value="administrator">Administrator</option>
                            <option value="visitor">Visitor</option>
                        </select>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="signup-button"> SIGN UP </button>
                        <button className="google">
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
