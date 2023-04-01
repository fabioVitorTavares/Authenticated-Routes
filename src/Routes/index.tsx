import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export default function RoutesApp() {


  return (
    <BrowserRouter>
      <Routes>

      <Route Component={Home} path="/"/>
      <Route Component={Login} path="/login"/>
      </Routes>
    </BrowserRouter>
  )
}