import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import FoodMenu from './pages/FoodMenu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css'

function App() {

  return (
    <div className="text-3xl font-bold text-center">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
