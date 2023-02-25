import React , {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense  = (props) =>{
    const [isEditing , setIsEditing] = useState(false);  //initialising to false bcz we dont want form to appear   in the beginning
    const saveExpenseDataHandler = (enteredExpenseData) =>{
         const expenseData ={
            ...enteredExpenseData,
            id : Math.random().toString()
         }; 
         console.log(expenseData);
         props.onAddExpense(expenseData);
         setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
   return(
    <div className="new-expense">
        {/* checking true false and then updating state */}
        {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
    </div>
   );
    
   
};
export default NewExpense;