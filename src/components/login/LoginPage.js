import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './LoginPage.css';
import Logo from '../../assets/logo.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); 
      navigate('/homepage');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password'); 
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container1">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="FreedomTracker Logo" className="logo" />
        </Link>
      </div>
      <div className="login-container">
        <h2>Sign into FreedomTracker</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Sign in</button>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="login-links">
          <Link to="/register" className="link">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
