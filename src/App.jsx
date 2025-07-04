import { useState } from 'react'
import Home from './componets/Home';
import './App.css'
import './fclConfig'
import Detail from './componets/Detail';
import Pi from './dashboard/Pi';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creattrail from './componets/Creattrail'
import TrialDetail from './componets/TrialDetail';


function App() {
  

  return (
    <>
    
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/dashboard/pi" element={<Pi />} />
        <Route path="/register-trial" element={<Creattrail />} />
        <Route path="/trial/:id" element={<TrialDetail />} />

          
      </Routes>

      
    </BrowserRouter>
    </>
  )
}

export default App
