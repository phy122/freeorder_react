import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import CartPage from './pages/product/CartPage'
import ProductListPage from './pages/product/ProductListPage'
import OrderListPage from './pages/order/OrderListPage'
import OrderReadPage from './pages/order/OrderReadPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} ></Route>
        <Route path='/list' element={ <ProductListPage /> }></Route>
        <Route path='/cart' element={ <CartPage /> }></Route>
        <Route path='/order/list' element={ <OrderListPage /> }></Route>
        <Route path='/order/read' element={ <OrderReadPage /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
