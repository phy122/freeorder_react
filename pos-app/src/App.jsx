import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StatusContextProvider from './contexts/StatusContextProvider';
import Payment from './pages/payment/Payment';
import Product from './pages/product/Product';
import Category from './pages/category/Category';
import Sale from './pages/sale/Sale';
import Notice from './pages/notice/Notice';
import Promotion from './pages/promotion/Promotion';
import ProductInsert from './pages/product/ProductInsert';


const App = () => {
  return (
    <BrowserRouter>
      <StatusContextProvider>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/product/insert" element={<ProductInsert />}></Route>
          <Route path="/product/update"></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/category/insert"></Route>
          <Route path="/category/update"></Route>
          <Route path="/option" element={<Option />}></Route>
          <Route path="/option/insert"></Route>
          <Route path="/option/update"></Route>
          <Route path="/payment" element={<Payment />} ></Route>
          <Route path="/sale" element={<Sale />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/promotion/insert"></Route>
          <Route path="/promotion/update"></Route>
        </Routes>
      </StatusContextProvider>
    </BrowserRouter>
  )
}

export default App
