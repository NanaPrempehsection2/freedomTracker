import React, { useState } from 'react';
import './AddInvestmentForm.css';

function AddInvestmentForm({ addInvestment }) {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && amount) {
      addInvestment({ type, amount: parseFloat(amount) });
      setType('');
      setAmount('');
    }
  };

  return (
    <form className="add-investment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Investment Type (e.g., Stock, Crypto)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Investment</button>
    </form>
  );
}

export default AddInvestmentForm;
