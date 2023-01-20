import React,{useContext} from 'react';
import { shorten } from './helper/shorttitle';
import { CartContex } from '../context/CartContexProvider';
import deleteicon from "../icons/delete.png";
import styles from './Cart.module.css'


const Cart = (data) => {

  const {state,dispatch} = useContext(CartContex)

  return (
    <div className={styles.container}>
       
      <div className={styles.productImage}><img src={data.data.image} alt="cartimg" style={{ width: "100px", height: "100px" }}></img></div>
      <div className={styles.data}>
        <h2>{shorten(data.data.title)}</h2>
        <p>{data.data.price}</p>
      </div>
      <div className={styles.quantity}>
        <span>{data.data.quantity}</span>
      </div>
      
      <div className={styles.buttonContainer}>
        {
          data.data.quantity > 1 ? 
          <button onClick={() => dispatch({type:"DECREASE" , payload:data.data})}>-</button> : <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:data.data})}><img src={deleteicon} alt='shop'/></button>
        }
        <button onClick={() => dispatch({type:"INCREASE" , payload:data.data})}>+</button>
        
      </div>
    </div>
  );
};

export default Cart;