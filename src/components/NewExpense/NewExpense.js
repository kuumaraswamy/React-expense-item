import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

export const NewExpense = () => {
    const saveExpensedataHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpensedataHandler}/>
    </div>
  )
}
export default NewExpense