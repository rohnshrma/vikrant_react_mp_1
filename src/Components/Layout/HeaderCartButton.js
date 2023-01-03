import { useContext,useEffect,useState } from "react"
import CartContext from "../store/cart-context"

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import Cart from "../Cart/Cart"


const HeaderCartButton = props => {

    const [isBtnHighlighted , setIsBtnHighlighted] = useState(false)

    const cartCtx = useContext(CartContext)
    console.log(cartCtx);

    const {items}= cartCtx

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

    const btnClasses = `${classes.button} ${isBtnHighlighted  ? classes.bump : ""}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }

        setIsBtnHighlighted(true)

        const timer = setTimeout(()=>{
            setIsBtnHighlighted(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }

    },[items])


    return (
        <button onClick={props.onShowCart} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>)
}


export default HeaderCartButton