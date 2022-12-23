import ReactDOM from "react-dom";

import classes from "./Modal.module.css"
import { Fragment } from "react";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart}/>
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById("overlays")


const Modal = props =>{
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
}
export default Modal