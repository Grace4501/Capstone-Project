import '../styles/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoBackground from '../resources/LogoBackground.jpg';
import googleLogo from '../resources/GoogleLogo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../utilities/fetchOps';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        role: ''
    });

    const [errors, setErrors] = useState({});
    const [serverMessage, setServerMessage] = useState({ type: null, message: null });

    const validateForm = () => {
        const newErrors = {};
        const { first_name, last_name, email, phone, password, role } = formData;

        if (!first_name.trim()) newErrors.first_name = 'First name is required.';
        if (!last_name.trim()) newErrors.last_name = 'Last name is required.';
        if (!email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            newErrors.phone = 'Phone must be in 123-456-7890 format.';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }
        if (!role) newErrors.role = 'Please select a role.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear specific field error
        setServerMessage({ type: null, message: null }); // Clear server messages
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await postData('http://localhost:5000/api/v1/session/register', formData);
            if (response.success) {
                setServerMessage({ type: 'success', message: 'Registration successful! Redirecting to login...' });
                setTimeout(() => navigate('/login'), 2000);
            } else {
                setServerMessage({ type: 'danger', message: response.message || 'Registration failed. Please try again.' });
            }
        } catch (error) {
            console.error('Signup error:', error);
            setServerMessage({ type: 'danger', message: 'Server error. Please try again later.' });
        }
    };

    return (
        <div className="Signup">
            <div
                className="logo-container"
                style={{
                    backgroundImage: `url(${logoBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1>Company</h1>
                <h5>Logo</h5>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4>Create Your Account</h4>

                    {serverMessage.message && (
                        <div className={`alert alert-${serverMessage.type}`} role="alert">
                            {serverMessage.message}
                        </div>
                    )}

                    {/* First Name */}
                    <div>
                        <label>First Name*</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                    </div>

                    {/* Middle Name */}
                    <div>
                        <label>Middle Name</label>
                        <input
                            type="text"
                            name="middle_name"
                            value={formData.middle_name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label>Last Name*</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label>Phone Number*</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="123-456-7890"
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label>Password*</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    {/* Role */}
                    <div>
                        <label>Role*</label>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="">Select your role</option>
                            <option value="Business Owner">Business Owner</option>
                            <option value="Consultant">Consultant</option>
                        </select>
                        {errors.role && <p className="error">{errors.role}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="buttons">
                        <button type="submit" className="btn btn-primary">
                            SIGN UP
                        </button>
                        <button type="button" className="btn btn-light">
                            <img src={googleLogo} alt="GoogleLogo" /> SIGN UP WITH GOOGLE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
