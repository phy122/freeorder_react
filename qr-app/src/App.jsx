import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} ></Route>
        {/* <Route path='/boards' element={ <Cart /> }></Route>
        <Route path='/boards/:id' element={ <Order /> }></Route>
        <Route path='/boards/insert' element={ <Payment /> }></Route>
        <Route path='/boards/update/:id' element={ <Product /> }></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
