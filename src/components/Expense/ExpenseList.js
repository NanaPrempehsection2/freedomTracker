import React from 'react';
import './ExpenseList.css';


function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name} - ${expense.amount}
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}


export default ExpenseList;
