import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import AnimatedInvitePage from "./pages/animatedInvitePage";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/invite" element={<AnimatedInvitePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}