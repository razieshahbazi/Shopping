import {shorten , isInCart , quantityCount} from "./helper/shorttitle"
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContex } from "../context/CartContexProvider";
import styles from "./Product.module.css"
import deleteicon from "../icons/delete.png"


export const Product = ({productData}) => {
  const  {state , dispatch} = useContext(CartContex);
  return (
    <div className={styles.container}>
      
      <img className={styles.cardImage} src={productData.image} alt="productimg"></img>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}$</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {
            isInCart(state , productData.id) ?
            <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload:productData})}>+</button> :
            <button onClick={() => dispatch({type:"ADD_ITEM", payload:productData})}>Add to Cart</button>
          }
          
          { quantityCount(state , productData.id) > 1 &&
            <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE", payload:productData})}>-</button> }
          { quantityCount(state , productData.id) === 1 &&
            <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM", payload:productData})}>
              <img src={deleteicon} alt="delete"/>
            </button> }
          

        </div>
      </div>

      </div>
        )
        }

        export default Product;