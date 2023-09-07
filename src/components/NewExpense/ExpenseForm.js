import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onExpense = props.onExpense;

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    onExpense(expenseData);

  };

  return (
    <form onSubmit={submithandler}>

      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2022-01-01' max='2024-12-31' onChange={dateChangeHandler} />
        </div>

      </div>

      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;