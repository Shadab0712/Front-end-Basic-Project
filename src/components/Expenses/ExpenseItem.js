import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [amount, setAmount] = useState(props.amount);
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs{amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;