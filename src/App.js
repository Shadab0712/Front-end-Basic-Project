import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import './components/NewExpense/NewExpense.css';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Bike Insurance',
      amount: 5000,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 10000,
      date: new Date(2021, 7, 14),
    }
  ];

  const [expenseArray, setExpenseArray] = useState(expenses);

  const expenseHandler = (expense) => {
    setExpenseArray([...expenseArray, expense]);
  };

  return (
    <div>
      <div className='new-expense'>
        <ExpenseForm onExpense={expenseHandler} />
      </div>
      <Expenses items={expenseArray} />
    </div>
  );
}

export default App;
