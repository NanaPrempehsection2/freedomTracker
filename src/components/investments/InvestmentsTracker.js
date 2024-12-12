import React, { useState } from 'react';
import './InvestmentsTracker.css';
import cryptoImage from '../../assets/crypto.jpg'; 
function InvestmentsTracker() {
  const [investments, setInvestments] = useState([]);
  const [investmentName, setInvestmentName] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [photoVisible, setPhotoVisible] = useState(true);

  const addInvestment = (e) => {
    e.preventDefault();
    if (investmentName && investmentAmount) {
      setInvestments([...investments, { name: investmentName, amount: parseFloat(investmentAmount) }]);
      setInvestmentName('');
      setInvestmentAmount('');
    }
  };

  const handlePhotoClick = () => {
    setPhotoVisible(false);
    setTimeout(() => {
      setPhotoVisible(true);
    }, 1000);
  };

  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="investments-tracker-container">
      <div className="top-left">
        <h1 onClick={redirectToHome} className="freedom-tracker-title">
          FreedomTracker
        </h1>
      </div>
      <div className="left-section">
        <p>Track your investments and monitor your financial growth effortlessly.</p>
        <img
          alt="Crypto Investment"
          className={`financial-image ${photoVisible ? 'visible' : 'hidden'}`}
          onClick={handlePhotoClick}
          src={cryptoImage} 
        />
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Add Your Investment</h2>
          <form onSubmit={addInvestment}>
            <label htmlFor="investment-name">Investment Name</label>
            <input
              type="text"
              id="investment-name"
              placeholder="e.g., Stocks, Bonds"
              value={investmentName}
              onChange={(e) => setInvestmentName(e.target.value)}
              required
            />
            <label htmlFor="investment-amount">Amount ($)</label>
            <input
              type="number"
              id="investment-amount"
              placeholder="e.g., 5000"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              required
            />
            <button type="submit" className="add-button">
              Add Investment
            </button>
          </form>
        </div>
        <div className="investment-list-container">
          <h2>Your Investments</h2>
          {investments.length === 0 ? (
            <p className="no-investments">No investments added yet.</p>
          ) : (
            <ul className="investment-list">
              {investments.map((investment, index) => (
                <li key={index} className="investment-item">
                  <span>{investment.name}</span>
                  <span>${investment.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvestmentsTracker;
