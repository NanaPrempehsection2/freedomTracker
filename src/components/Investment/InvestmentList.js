import React from 'react';
import './InvestmentList.css';

function InvestmentList({ investments }) {
  return (
    <div className="investment-list">
      <h3>Investments</h3>
      {investments.map((investment, index) => (
        <div className="investment-item" key={index}>
          <span>{investment.type}</span>
          <span>${investment.amount.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default InvestmentList;
