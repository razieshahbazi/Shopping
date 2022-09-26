import React from 'react'
import { useContext } from 'react';
import Product from './Product';
import {ProductsContext} from '../context/ProductContextProvider'


const Store = () => {

    const products = useContext(ProductsContext);

  return (
    <div style={{display:"flex" , justifyContent:"space-between" , flexWrap:"wrap"}}>
        {
        products.map(
            product =>
                
                    <Product key={product.id} productData={product}/>)
        }
    </div>

  )
}

export default Store;