
import './App.css';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import {switchCase,route,Switch,redirect,BrowserRouter} from "react-router-dom";
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    
<ProductContextProvider>
  <Switch>
     <route path="/products/:id" component={ProductDetails} />
     <route path="/products" component={Store} />
     <redirect to="/products" />
  </Switch>
</ProductContextProvider>

   
  );
}

export default App;
