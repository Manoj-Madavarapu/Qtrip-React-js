import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
let Login=()=>{
    let navigate=useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let handleSubmit=(e)=> {
        e.preventDefault();
        let storedEmail = sessionStorage.getItem("email")
        let storedPassword = sessionStorage.getItem("password")
        if(!email.trim()) {
            alert("Email is required");
            return;
        }
        if(!password.trim()) {
            alert("Password is required");
            return;
        }
        if(email!== storedEmail) {
            alert("Invalid Email");
            return;
        }
        if(password!==storedPassword) {
            alert("Invalid Password");
            return;
        }
        alert("Sign-In Successful");
        navigate("/home");
        }
    return(
        <>
           <nav>
            <div className="logo"><a href="">QTrip</a></div>
            <div className="nav_list">
            <ul>
                <li><a href="" onClick={()=>navigate("/home")}>Home</a></li>
                <li><a href="" id="login" onClick={()=>navigate("/")}>Login Here</a></li>
                <li><a href="" id="register" onClick={()=>navigate("/register")}>Register</a></li>
            </ul>
            </div>
        </nav>
        <div className="welcome up">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
        </div>
        <div>
        <form action="" className="form"onSubmit={handleSubmit} style={{width:"330px",}}>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <input type="submit" value="Login to QTrip" style={{width:"322px",backgroundColor: "#f19537",color:"white",fontWeight:"bold",marginBottom:"15px",border:"none",fontSize:"16px"}} />
            <p style={{color:"grey",fontSize:"15px"}}>Don't have an account? <span style={{color:"#f19537",cursor:"pointer"}} onClick={()=>navigate("/register")}>Register Now</span></p>
        </form>
        </div>
        <Footer/>
        </>
    )
}
export  default Login;