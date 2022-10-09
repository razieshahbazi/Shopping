
import './App.css';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import {switchCase,Navigate,Route,Routes,redirect,BrowserRouter} from "react-router-dom";
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    
<ProductContextProvider>
  <Routes>
     <Route path="/products/:id" element={<ProductDetails/>} />
     <Route path="/products" element={<Store/>} />
     <Route path="*" element={<Navigate to="/products" replace />} />
  </Routes>
</ProductContextProvider>

   
  );
}

export default App;
