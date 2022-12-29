import React, { useContext, useRef, useState } from 'react'
import CartContext from '../../store/cart-context'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"
const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = (event) => {
        console.log("triggered");
        event.preventDefault()
        // string 
        const enteredAmount = amountInputRef.current.value
        // converted to num
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return ;
        }
        props.onAddToCart(enteredAmountNumber )
        // console.log(enteredAmount);
    }
    console.log(amountIsValid);

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount :" input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "0"
                }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5). </p>}
        </form>
    )
}

export default MealItemForm