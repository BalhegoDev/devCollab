import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import AnimatedInvitePage from "./pages/animatedInvitePage";
import Projetos from "./pages/projetos";
import CreateProject from "./pages/createProject";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/invite" element={<AnimatedInvitePage/>}/>
        <Route path="/createProject" element={<CreateProject/>}/>
      </Routes>
    </BrowserRouter>
  )
}