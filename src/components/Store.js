import React from 'react'
import { useContext } from 'react';
import Product from './Product';
import {ProductsContext} from '../context/ProductContextProvider'
import styles from "./Store.module.css"

const Store = () => {

    const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
        {
        products.map(
            product =>
                
                    <Product key={product.id} productData={product}/>)
        }
    </div>

  )
}

export default Store;