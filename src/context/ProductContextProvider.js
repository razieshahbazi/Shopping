import React,{createContext, useEffect , useState} from 'react';
import {getProducts} from "../servises/api";

export const ProductsContext = createContext();



const ProductContextProvider = ({children}) => {

  const [products , setProducts] = useState([])


  useEffect(() => {
    const fetchApi = async ()=>{
      setProducts(await getProducts());
    }

    fetchApi();
  },[])

return (

  <ProductsContext.Provider value={products}>
    {children}
  </ProductsContext.Provider>

)
};

export default ProductContextProvider;
