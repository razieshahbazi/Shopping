import {shorten} from "./helper/shorttitle"
import { Link } from 'react-router-dom';

export const Product = ({productData}) => {
  return (
    <><div>
      <h2>{shorten(productData.title)}</h2>
      <img src={productData.image} alt="productimg" style={{ width: "300px", height: "300px" }}></img>

      <p>{productData.price}</p></div><div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          <button>Add to cart</button>
        </div>
      </div></>
        )
        }

        export default Product;