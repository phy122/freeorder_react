import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginContextProvider from './contexts/LoginContextProvider'
import MainPage from './pages/MainPage'
import OrderListPage from './pages/Order/OrderListPage'
import OrderReadPage from './pages/Order/OrderReadPage'
import PaymentPage from './pages/payment/PaymentPage'
import CartPage from './pages/product/CartPage'
import ProductListPage from './pages/product/ProductListPage'
import CompletePage from './pages/payment/CompletePage'
import FailPage from './pages/payment/FailPage'
import ProductOption from './components/product/ProductOption'

function App() {

  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<MainPage />} ></Route>
          <Route path='/list' element={<ProductListPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/order/list' element={<OrderListPage />}></Route>
          <Route path='/order/read/:id' element={<OrderReadPage />}></Route>
          <Route path='/pay' element={<PaymentPage />}></Route>
          <Route path='/success' element={<CompletePage />}></Route>
          <Route path='/fail' element={<FailPage />}></Route>
          <Route path='/product/option' element={<ProductOption />}></Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App
