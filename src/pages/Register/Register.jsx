// src/components/Register.js

import React, { useState } from 'react';
import './Register.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registering with:', formData);
        // Add your registration logic here, e.g., sending data to backend
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="register-select"
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="coach">Coach</option>
                        <option value="player">Player</option>
                    </select>
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
