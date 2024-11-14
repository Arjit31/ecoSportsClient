// src/components/Login.js

import { useState } from 'react';
import './Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, password });
        // Add your login logic here
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Please log in to your account</p>
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
