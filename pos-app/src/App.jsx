import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StatusContextProvider from './contexts/StatusContextProvider';
import Payment from './pages/payment/Payment';
import Product from './pages/product/Product';


const App = () => {
  return (
    <BrowserRouter>
      <StatusContextProvider>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/product/insert"></Route>
          <Route path="/product/update"></Route>
          <Route path="/category" ></Route>
          <Route path="/category/insert"></Route>
          <Route path="/category/update"></Route>
          <Route path="/option"></Route>
          <Route path="/option/insert"></Route>
          <Route path="/option/update"></Route>
          <Route path="/payment" element={<Payment />} ></Route>
          <Route path="/management"></Route>
          <Route path="/notice"></Route>
          <Route path="/promotion"></Route>
          <Route path="/promotion/insert"></Route>
          <Route path="/promotion/update"></Route>
        </Routes>
      </StatusContextProvider>
    </BrowserRouter>
  )
}

export default App
