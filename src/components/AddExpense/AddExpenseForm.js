import React, { useState } from "react";

const AddExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addExpense({
        id: Math.random().toString(),
        description,
        amount: parseFloat(amount),
      });
      setDescription("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
