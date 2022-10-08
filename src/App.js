
import React from 'react'
import ExpenseItem from './components/ExpenseItem'
const App = () => {
  const expenses= [
    {title:"car insurance",amount:250, date: new Date(2022, 2, 28)}
  ]
  //  for(let expenses=1;expenses<100;expenses++)
  return (
    
    <div>
    <h1>Expense Item</h1>
    <ul>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} > </ExpenseItem>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} > </ExpenseItem>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} > </ExpenseItem>
      </ul>
    </div>
  )
}

export default App
