import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';
import Logo from '../../assets/logo.png';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/auth/register', { email, username, password });
      
      console.log(response);

      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      console.log('Registration error:', err); 
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="logo-container1">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="FreedomTracker Logo" className="logo" />
        </Link>
      </div>
      <div className="register-container">
        <h2>Create your FreedomTracker account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="username"  
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
           <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button" disabled={loading}>
            {loading ? 'Registering...' : 'Create Account'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="register-links">
          <Link to="/login" className="link">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
