import { useState } from 'react'
import Home from './componets/Home';
import './App.css'
import './fclConfig'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        
      </Routes>

      
    </BrowserRouter>
    </>
  )
}

export default App
