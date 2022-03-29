import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Component/css/style.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Component/css/style.css'
import './Component/css/styles.css'
import './Component/vendor/fontawesome-free/css/all.min.css'
import App from './App';
import Page_404 from './Component/Page_404';
import Login from './Component/Login';
import Index from './Component/Index';
import Product from './Component/product';
import ProductDetails from './Component/ProductDetails'
import FrameProduct from './Component/FrameProduct';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <Routes>
        
        <Route path='/' element={<Index/>}>
          <Route path='frameproduct' element={<FrameProduct/>}>
            <Route path='product' element={<Product/>}></Route>
          </Route>          
          <Route path='productdetails' element={<ProductDetails/>}></Route>
        </Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/app' element={<App/>}>
          <Route path='*' element={<Page_404/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
