import './ExpenseItem.css'
import React, { useState } from 'react';

function ExpenseItem(props) {

    const [date , setDate] =   useState(props.expense.date);
    const [item , setItem]  =   useState(props.expense.item);
    const [price , setPrice]  =   useState(props.expense.price);

    const clickHandler = (event) => {
        setItem("New Item value!!!")  
    };

    return (
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-item__description">
                <h2>{item}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
            <div>
                <button type='button' onClick = {clickHandler}>change text</button>
            </div>
        </div>
    );
}

export default ExpenseItem;