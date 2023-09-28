
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Detail from './pages/Detail'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Detail />}/>
      <Route path="/cart" element={  <Cart />} />
     
     </Routes>
     
     {/* <Detail /> */}
   

     
    </>
  )
}

export default App
