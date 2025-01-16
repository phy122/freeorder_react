import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StatusContextProvider from './contexts/StatusContextProvider';
import Payment from './pages/payment/Payment';
import Product from './pages/product/Product';
import Category from './pages/category/Category';
import Sale from './pages/sale/Sale';
import Notice from './pages/notice/Notice';
import ProductInsert from './pages/product/ProductInsert';
import ProductUpdate from './pages/product/ProductUpdate';
import ProductUpdateList from './pages/product/ProductUpdateList';
import Productlocate from './pages/product/Productlocate';
import ProductSelectOption from './pages/product/ProductSelectOption';
import ProductSetting from './pages/product/ProductSetting';
import Option from './pages/option/Option';
import OptionInsert from './pages/option/OptionInsert';
import CategoryInsert from './pages/category/CategoryInsert';
import CategoryUpdate from './pages/category/CategoryUpdate';
import PromotionInsert from './pages/promotion/PromotionInsert';
import PromotionUpdate from './pages/promotion/PromotionUpdate';
import Promotion from './pages/promotion/Promotion';


const App = () => {
  return (
    <BrowserRouter>
      <StatusContextProvider>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/product/insert" element={<ProductInsert />}></Route>
          <Route path="/product/update" element={<ProductUpdate />}></Route>
          <Route path="/product/updateList" element={<ProductUpdateList />}></Route>
          <Route path="/product/locate" element={<Productlocate />}></Route>
          <Route path="/product/selectOption" element={<ProductSelectOption />}></Route>
          <Route path="/product/setting" element={<ProductSetting />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/category/insert" element={<CategoryInsert />}></Route>
          <Route path="/category/update" element={<CategoryUpdate />}></Route>
          <Route path="/option" element={<Option />}></Route>
          <Route path="/option/insert" element={<OptionInsert />}></Route>
          <Route path="/option/update"></Route>
          <Route path="/payment" element={<Payment />} ></Route>
          <Route path="/sale" element={<Sale />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/promotion/insert" element={<PromotionInsert />}></Route>
          <Route path="/promotion/update" element={<PromotionUpdate />}></Route>
        </Routes>
      </StatusContextProvider>
    </BrowserRouter>
  )
}

export default App
