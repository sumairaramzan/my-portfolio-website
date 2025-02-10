import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState(null); // To show error message
    const [successMessage, setSuccessMessage] = useState(null); // To show success message

    const navigate = useNavigate(); // Initialize useNavigate for redirect

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/register", formData);

        // Handle successful login here (e.g., storing token)
        console.log(response.data);

        // Redirect after successful login
        navigate("/login");  // Or wherever you want to redirect after login
        console.log("register success")

    } catch (error) {
        // Handle errors
        console.error("Error:", error.response ? error.response.data : error);
    }
};


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg p-4">
                        <h2 className="text-center">Register</h2>

                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
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
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
