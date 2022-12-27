import React,{useContext} from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'

import CartContext  from '../store/cart-context'
const Cart = (props) => {


    const cartCtx = useContext(CartContext)

    console.log(cartCtx);


    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{
                id: "c1",
                name: "sushi",
                amount: 2,
                price: 12.00,
            }].map((item) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    )


    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>24.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart