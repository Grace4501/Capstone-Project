import '../styles/Signup.css';
import logoBackground from '../resources/LogoBackground.jpg';
import googleLogo from '../resources/GoogleLogo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful signup
            console.log('Form submitted:', formData);
            
            // Redirect to login page after successful signup
            navigate('/login');
        } catch (error) {
            console.error('Signup error:', error);
            // Here you would handle any signup errors
        }
    };

    return (
        <div className="Signup">
            <div style={{
                backgroundImage: `url(${logoBackground})`, backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} className="logo-container">
                <h1> Company </h1>
                <h5> Logo </h5>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4> Create Your Account </h4>
                    <div>
                        <label>First Name*</label>
                        <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label>Middle Name</label>
                        <input 
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last Name*</label>
                        <input 
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label>Email*</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label>Phone Number*</label>
                        <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                        />
                    </div>
                    <div>
                        <label>Password*</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <label>Role*</label>
                        <select 
                            required 
                            className="role-select"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Select your role</option>
                            <option value="business_owner">Business Owner</option>
                            <option value="consultant">Consultant</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="signup-button">SIGN UP</button>
                        <button type="button" className="google">
                            <img src={googleLogo} alt='GoogleLogo' />SIGN UP WITH GOOGLE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
