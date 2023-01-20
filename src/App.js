
import './App.css';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import {switchCase,Navigate,Route,Routes,redirect,BrowserRouter} from "react-router-dom";
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import CartContexProvider from './context/CartContexProvider';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';


function App() {
  return (
    
<ProductContextProvider>
  <CartContexProvider>
    <Navbar/>
    <Routes>
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Store/>} />
      <Route path="/Cart" element={<ShopCart/>} />
      <Route path="*" element={<Navigate to="/products" replace />} />
    </Routes>
  </CartContexProvider>
</ProductContextProvider>

   
  );
}

export default App;
