import React, { useContext } from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartItem from "./CartItem"
import CartContext from '../store/cart-context'
const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoverHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1})
    }

    const hasItems = cartCtx.items.length > 0

    console.log(cartCtx);


    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => {
                return <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoverHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                />
            })
            }
        </ul>
    )


    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Cancel</button>
                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart