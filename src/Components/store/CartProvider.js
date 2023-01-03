
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id
        })

        const existingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems;

        console.log("existing", existingCartItem);

        if (existingCartItem) {
            // the object whose amount is updated
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            // adding previous unaffected items
            updatedItems = [...state.items]
            // updated the found item
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            // if the item doesnt exist already
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }


    // if type of action is remove
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.id
        })

        const existingItem = state.items[existingCartItemIndex]

        const updatedTotalAmount = state.totalAmount - existingItem.price;


        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            // adding previous unaffected items
            updatedItems = [...state.items]
            // updated the found item
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }


    }

    // console.log({ state, action });
    return defaultCartState
}



const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }


    console.log(cartState);

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider