import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import AnimatedInvitation from "./pages/animatedInvitation";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="invite" element={<AnimatedInvitation/>}/>
      </Routes>
    </BrowserRouter>
  )
}