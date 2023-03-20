import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import FoodMenu from './pages/FoodMenu';
import './App.css'

function App() {

  return (
    <div className="text-3xl font-bold text-center">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/menu" element={<FoodMenu />} />
      </Routes>
    </div>
  )
}

export default App
