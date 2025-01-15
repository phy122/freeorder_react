import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/main'
import ProductList from './components/product/ProductList'
import ProductCart from './components/product/ProductCart'
import OrderList from './components/order/OrderList'
import OrderRead from './components/order/OrderRead'
import ProductRead from './components/product/ProductRead'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path='/qr/products/list' element={ <ProductList /> }></Route>
        <Route path='/qr/products/cart' element={ <ProductCart /> }></Route>
        <Route path='/qr/products/read' element={ <ProductRead /> }></Route>
        <Route path='/qr/order/list' element={ <OrderList /> }></Route>
        <Route path='/qr/order/read' element={ <OrderRead /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
