import {shorten} from "./helper/shorttitle"


export const Product = ({productData}) => {
  return (
    <><div>
      <h2>{shorten(productData.title)}</h2>
      <img src={productData.image} alt="productimg" style={{ width: "300px", height: "300px" }}></img>

      <p>{productData.price}</p></div><div>
        <a href="#">Details</a>
        <div>
          <button>Add to cart</button>
        </div>
      </div></>
        )
        }

        export default Product;