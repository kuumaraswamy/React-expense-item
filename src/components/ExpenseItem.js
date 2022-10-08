import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return (
    <div className="main">
     <div className='expense-item'></div> 
     <div>{props.date.toISOString()}</div>
     <div className='expense-item__description'> </div>
     <h2> {props.title}</h2>
     <div className='expense-item__price'>{props.amount}</div>
    </div>
  )
}

export default ExpenseItem
