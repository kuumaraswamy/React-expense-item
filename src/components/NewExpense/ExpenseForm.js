import React,{useState} from 'react'
import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [enterdTitle,setEnterdTitle] = useState("");
  const [enterdAmount,setEnterdAmount] = useState("");
  const [enterdDate,setEnterdDate] = useState("");
  // const [userInput,setUserInput]= useState({
  //   enterdTitle: '',
  //   enterdAmount: '',
  //   enterdDate:  '',
  // })
  const titleChangeHandler = (event)=>{
     setEnterdTitle(event.target.value)

    //2. setUserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // })
     //3. setUserInput((prevState)=>{
      //   return {...prevState, enterdTitle:event.target.value}

      // })
  }
  const amountChangeHandler = (event)=>{
    setEnterdAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: event.target.value,
    // })
  }
  const dateChangeHandler = (event)=>{
    setEnterdDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // })
  }

  const submitHandler = (event)=>{
    event.preventDefault()
  }
  const expenseData={
    title:enterdTitle,
    amount: enterdAmount,
    date: new Date(enterdDate)
  }
  console.log(expenseData)
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
               <label>Title</label>
               <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
               <label>Amount</label>
               <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
               <label>Date</label>
               <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm