import React from "react";
import { useNavigate } from "react-router-dom";
let Nav=()=>{
    let navigate=useNavigate()
    return(
        <>
        <nav>
            <div className="logo"><a href="">QTrip</a></div>
            <div className="nav_list">
            <ul>
                <li><a href="" id="home" onClick={()=>navigate("/home")}>Home</a></li>
                <li><a href="" id="reservations">Reservations</a></li>
                <li><a href="" id="login" onClick={()=>navigate("/")}>Login Here</a></li>
                <li><a href="" id="register" onClick={()=>navigate("/register")}>Register</a></li>
            </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav;