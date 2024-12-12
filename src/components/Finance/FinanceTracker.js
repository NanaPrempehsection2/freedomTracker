import React, { useState } from 'react';
import AddExpenseForm from '../AddExpense/AddExpenseForm';
import ExpenseList from '../Expense/ExpenseList';
import TotalExpenses from '../Total/TotalExpenses';
import './FinanceTracker.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import trackerImage from '../../assets/imgTracker.webp';

function FinanceTracker() {
  const [expenses, setExpenses] = useState([]);
  
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense, index) => index !== id));
  };

  return (
    <div className="finance-tracker">
      <header className="header">
        <div className="logo-container1">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="FreedomTracker Logo" className="logo" />
          </Link>
        </div>
      </header>
      <div className="hero">
        <h1>Track Your Finances</h1>
        <p>Stay on top of your expenses and savings!</p>
      </div>
      <div className="content-wrapper">
        <div className="image-section">
          <img
            className="decorative-image"
            src={trackerImage}
            alt="Finance-related illustration"
          />
        </div>
        <div className="main-section">
          <main>
            <AddExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            <TotalExpenses expenses={expenses} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default FinanceTracker;
