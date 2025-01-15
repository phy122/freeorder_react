import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Product from './pages/product/Product';
import Payment from './pages/payment/Payment';


const App = () => {
  return(
    <>
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product/>}></Route>
            <Route path="/product/insert"></Route>
            <Route path="/product/update"></Route>
            <Route path="/category" ></Route>
            <Route path="/category/insert"></Route>
            <Route path="/category/update"></Route>
            <Route path="/option"></Route>
            <Route path="/option/insert"></Route>
            <Route path="/option/update"></Route>
            <Route path="/payment" element={<Payment/>} ></Route>
            <Route path="/management"></Route>
            <Route path="/notice"></Route>
            <Route path="/promotion"></Route>
            <Route path="/promotion/insert"></Route>
            <Route path="/promotion/update"></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
      <Sidebar />
    </>
  )
}

export default App
