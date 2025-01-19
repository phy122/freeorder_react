import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import OrderListPage from './pages/Order/OrderListPage'
import OrderReadPage from './pages/Order/OrderReadPage'
import LoginContextProvider from './contexts/LoginContextProvider'
import ProductListPage from './pages/product/ProductListPage'
import CartPage from './pages/product/CartPage'
import PaymentPage from './pages/payment/PaymentPage'

function App() {

  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<MainPage />} ></Route>
          <Route path='/list' element={<ProductListPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/order/list' element={<OrderListPage />}></Route>
          <Route path='/order/read' element={<OrderReadPage />}></Route>
          <Route path='/pay' element={<PaymentPage />}></Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App
