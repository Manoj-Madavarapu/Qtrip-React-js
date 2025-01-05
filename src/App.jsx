import React,{Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/style.css"
import Nav from "./components/Nav"
import Home from "./components/Home";
import City from "./components/City";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Regiter"
import Footer from "./components/Footer";
import ProtectedRouting from "./components/ProtectedRouting";
let App=()=>{
    return(
        <>
          <BrowserRouter>
          {/* <Nav/> */}
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route element={<ProtectedRouting/>}>
               <Route path="/home" element={<Home/>}></Route>
               <Route path="/city/:id" element={<City/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
            </Route>
          </Routes>
          {/* <Footer/> */}
          </BrowserRouter>
        </>
    )
}
export default App;



// path="/city/:id": where :city is a placeholder for any city name where this :id will be replaced with clicked city.
// For example, /city/bangalore will match this route, and :id will be replaced with 'bangalore'.