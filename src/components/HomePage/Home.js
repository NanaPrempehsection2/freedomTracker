import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Cash from '../../assets/cash.jpg';
import Logo from '../../assets/logo.png'; 

function Home() {
  return (
    <div class  Name="home">
      <nav className="navbar">
        <div className="logo-container-1">
          <img src={Logo} alt="FreedomTracker Logo" className="navbar-logo" />
        </div>
        
        <ul className="nav-links-1">
          <li><Link to="/finance">Managed investing</Link></li>
          <li><Link to="/investments">Self-directed investing</Link></li>
        </ul>
        
        <div className="auth-buttons">
          <Link to="/login"><button className="login-btn">Log in</button></Link>
          <Link to="/register"><button className="get-started-btn">Get started</button></Link>
        </div>
      </nav>

      <div className="main-content">
        <h2>Build wealth with FreedomTracker Today</h2>
        <p>Register by December 13 to start tracking your financial freedom journey with us.</p>
        <div className="cta-buttons">
          
        </div>
      </div>

      <div className="promo-image">
        <img src={Cash} alt="" className="cash"/>
      </div>
    </div>
  );
}

export default Home;
