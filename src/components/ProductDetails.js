import React, {useContext} from 'react';
import { Link,useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const { id } = useParams();
    const data = useContext(ProductsContext);
    const product = data.find((p) => p._id ===  Number(id));
    //const id = props.match.params.id;
    
    // //const product = data[id - 1];
    // const {image, title, description, price, category} = product;

    return (
        <div>
            <img src={product.image} alt="product" />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><span>Category:</span> {product.category}</p>
                <div>
                    <span>{product.price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;














