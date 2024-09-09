import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home"; 
import MyCase from "./pages/MyCase"; 
import Payment from "./pages/Payments"; 
import AI from "./pages/AIasitant"; 
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path ="/" element={<Homepage/>}/>
     <Route path ="/mycase" element={<MyCase/>}/>
     <Route path ="/Payment" element={<Payment/>}/>
     <Route path ="/Assitant" element={<AI/>}/>
     <Route path ="/Login" element={<Login/>}/>
     <Route path ="/Register" element={<Register/>}/>
    
     
    </Routes>
    </BrowserRouter>
  );
}
export default App;