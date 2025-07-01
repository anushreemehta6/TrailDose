import { useState } from 'react'
import Home from './componets/Home';
import './App.css'
import './fclConfig'
import Detail from './componets/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Detail />} />
        
      </Routes>

      
    </BrowserRouter>
    </>
  )
}

export default App
