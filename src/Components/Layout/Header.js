import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header = props => {
    <header className={classes.header} >
        <h1>Tomato</h1>
        <HeaderCartButton />
    </header>
}


export default Header