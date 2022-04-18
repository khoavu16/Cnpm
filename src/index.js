import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Page_404 from './Component/Page_404';
import Login from './Component/Login';
import Index from './Component/Index';
import Product from './Component/Product';
import ProductDetails from './Component/ProductDetails'
import FrameProduct from './Component/FrameProduct';
import './Component/css/shop.css'
import './Component/css/home.css'
import './Component/css/style.css'
import './Component/css/styles.css'
import './Component/vendor/fontawesome-free/css/all.min.css'

import store from './store'
import { Provider } from 'react-redux'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <Provider store={store}>
      <Routes>
        
        <Route path='/' element={<Index/>}>
          <Route path='/frameproduct' element={<FrameProduct/>}/>

          <Route path='/frameproduct/:productId' element={<ProductDetails/>}/>

        </Route>



        <Route path='/login' element={<Login/>}></Route>

        <Route path='/app' element={<App/>}>
          <Route path='*' element={<Page_404/>}></Route>
        </Route>

      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
