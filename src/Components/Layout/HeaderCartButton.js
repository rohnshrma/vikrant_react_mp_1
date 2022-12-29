import { useContext } from "react"
import CartContext from "../store/cart-context"

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import Cart from "../Cart/Cart"


const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)
    console.log(cartCtx);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

    return (
        <button onClick={props.onShowCart} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>)
}


export default HeaderCartButton