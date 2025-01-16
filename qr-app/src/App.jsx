import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/main'
import List from './pages/product/list'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path='/products/list' element={ <List /> }></Route>
        {/* <Route path='/products/cart' element={ <ProductCart /> }></Route>
        <Route path='/products/read' element={ <ProductRead /> }></Route>
        <Route path='/order/list' element={ <OrderList /> }></Route>
        <Route path='/order/read' element={ <OrderRead /> }></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
