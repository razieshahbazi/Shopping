import React, {useContext} from 'react';
import { Link,useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css'

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const { id } = useParams();
    const data = useContext(ProductsContext);
    const product = data.find((p) => p.id ===  Number(id));


    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category }><span>Category:</span> {product.category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{product.price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;














