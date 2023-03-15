import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <div className="text-3xl font-bold text-center">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
