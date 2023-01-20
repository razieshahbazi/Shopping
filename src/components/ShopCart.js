import React,{useContext} from 'react';
import Cart from './Cart';
import {CartContex} from '../context/CartContexProvider';
import styles from './ShopCart.module.css';


const ShopCart = () => {
  const {state,dispatch} = useContext(CartContex)
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
      </div>

      <div className={styles.payments}>
        {
          state.itemscounter > 0 && <div>
            <p><span>Total items :</span>{state.itemscounter}</p>
            <p><span>Total Payments :</span>{state.total} </p>
            <div className={styles.buttonContainer}>
              <button className={styles.checkout} onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
              <button className={styles.clear} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
            </div>

            </div>
        }
      </div>

    </div>
  )
}

export default ShopCart;