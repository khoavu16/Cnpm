import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Page_404 from './Component/Page_404';
import Login from './Component/Login';
import Index from './Component/Cart_Redux/Index'; 
import ProductDetails from './Component/ProductDetails'
import Product from './Component/Product'
import './Component/css/shop.css'
import './Component/css/home.css'
import './Component/css/style.css'
import './Component/css/styles.css'
import './Component/vendor/fontawesome-free/css/all.min.css'
import 'react-slideshow-image/dist/styles.css'
import store from './store/store'
import { Provider } from 'react-redux'
import Cart from './Component/Cart_Redux/Cart'
import Menu from './Component/Cart_Redux/menuFood'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      {/* <Provider store={store}> */}
        <Routes>
          
          <Route path='/' element={<Index/>}>
            <Route path='' element={<Product/>}/>
            <Route path=':productId' element={<ProductDetails/>}/>
            <Route path='id/:abc' element={<Menu/>}></Route>
          </Route>

          

          <Route path='/cart' element={<Cart/>}></Route>

          

          <Route path='/login' element={<Login/>}></Route>

          <Route path='/app' element={<App/>}>
            <Route path='*' element={<Page_404/>}></Route>
          </Route>

        </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
