import React from 'react';
import './TotalExpenses.css';

function TotalExpenses({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="total-expenses">
      <h3>Total Expenses</h3>
      <p>${total.toFixed(2)}</p>
    </div>
  );
}

export default TotalExpenses;
