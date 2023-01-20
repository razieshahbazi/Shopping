import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContex} from "../context/CartContexProvider" ;
import shopIcon from "../icons/shopicon.png";
import styles from "./Navbar.module.css"




const Navbar = () => {
    const {state} = useContext(CartContex)
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link  className={styles.productLink} to="/products">Product</Link>
            <div className={styles.iconContainer}>
                <Link to="/Cart"><img src={shopIcon} alt='shop'/></Link>
                <span>{state.itemscounter}</span>
            </div>
            
        </div>
    </div>
  )
}
export default Navbar;