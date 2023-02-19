import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title , setTitle] = useState(props.title);
  function clickHandler(){
    setTitle('Updated Title!');
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Click me!!</button>
      </div>
      
    </div>
  );
}

export default ExpenseItem;
