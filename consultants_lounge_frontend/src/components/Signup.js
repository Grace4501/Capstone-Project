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
    const [serverMessage, setServerMessage] = useState(null);
    const [serverMessageType, setServerMessageType] = useState(null); // 'danger' for error, 'success' for success

    const validateForm = () => {
        let newErrors = {};

        if (!formData.first_name.trim()) newErrors.first_name = "First name is required.";
        if (!formData.last_name.trim()) newErrors.last_name = "Last name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be in 123-456-7890 format.";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        if (!formData.role) newErrors.role = "Please select a role.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Clear error when user types
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));

        setServerMessage(null); // Hide server message when input changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await postData('http://localhost:5000/api/v1/session/register', formData);
            console.log("response", response);

            if (response && response.success) {
                // Successful registration
                setServerMessage("Registration successful! Redirecting to login...");
                setServerMessageType("success");
                setTimeout(() => navigate('/login'), 2000);
            } else {
                // Error from server (400 or 500)
                setServerMessage(response ? response.message : 'Unknown error');
                setServerMessageType("danger");
            }
        } catch (error) {
            console.error("Signup error:", error);
            setServerMessage("Server error. Please try again later.");
            setServerMessageType("danger");
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

                    {/* Bootstrap Alert for Server Messages */}
                    {serverMessage && (
                        <div className={`alert alert-${serverMessageType}`} role="alert">
                            {serverMessage}
                        </div>
                    )}

                    {/* First Name */}
                    <div>
                        <label>First Name*</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                    </div>

                    {/* Middle Name */}
                    <div>
                        <label>Middle Name</label>
                        <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label>Last Name*</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label>Email*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label>Phone Number*</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="123-456-7890" />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label>Password*</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
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
                        <button type="submit" className="btn btn-primary">SIGN UP</button>
                        <button type="button" className="btn btn-light">
                            <img src={googleLogo} alt="GoogleLogo" /> SIGN UP WITH GOOGLE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
