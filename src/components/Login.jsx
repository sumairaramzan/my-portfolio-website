import React, { useState } from "react";
import axios from "axios"; // Ensure you have axios installed
import { useNavigate } from "react-router-dom"; // Import navigate for redirect

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState(null); // To show error messages
    const [successMessage, setSuccessMessage] = useState(null); // To show success messages
    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);
    
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", formData);
    
            // Store token in localStorage
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user info if needed
    
            setSuccessMessage("Login successful!");
            navigate("/dashboard"); // Redirect to dashboard
    
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Invalid credentials");
        }
    };
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center">Login</h2>

                        {/* Show error message if any */}
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        {/* Show success message if any */}
                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
