import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import FinanceTracker from './components/Finance/FinanceTracker';
import InvestmentsTracker from './components/investments/InvestmentsTracker';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finance" element={<FinanceTracker />} />
          <Route path="/investments" element={<InvestmentsTracker />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
