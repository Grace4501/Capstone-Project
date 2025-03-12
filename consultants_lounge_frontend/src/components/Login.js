import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../utilities/fetchOps';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [serverMessage, setServerMessage] = useState(null);
    const [serverMessageType, setServerMessageType] = useState(null);

    const validateForm = () => {
        let newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));

        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        setServerMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {

            const response = await postData('http://localhost:5000/api/v1/session/login', formData);
            if (response.success) {
                setServerMessage("Login successful! Redirecting...");
                setServerMessageType("success");
                setTimeout(() => navigate('/'), 2000);
            }
            else {
                setServerMessage(response.message);
                setServerMessageType("danger");
            }          
     

        } catch (error) {
            console.error("Login error:", error);
            setServerMessage("Server error. Please try again later.");
            setServerMessageType("danger");
        }
    };

    return (
        <div className="Login">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4> Login to Your Account </h4>
                    
                    {serverMessage && (
                        <div className={`alert alert-${serverMessageType}`} role="alert">
                            {serverMessage}
                        </div>
                    )}

                    <div>
                        <label>Email*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    
                    <div>
                        <label>Password*</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="buttons">
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

