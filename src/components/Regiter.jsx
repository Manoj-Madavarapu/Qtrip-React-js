import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
let Register=()=>{
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [confirmPassword,setConfirmPassword]=useState("");
    let navigate=useNavigate();

    let handleSignUp = (e) => {
       e.preventDefault();
       if (!email.trim()) {
       alert("Email is required!");
        return;
    }
    if (!password.trim()) {
        alert("Password is required!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert(
            "Password must include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character!"
        );
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
       sessionStorage.setItem("password", password);
       sessionStorage.setItem("email", email);
       alert("Registration Successful!");
       navigate("/");
    }

    return(
        <>
        <div>
          <nav>
            <div className="logo"><a href="">QTrip</a></div>
            <div className="nav_list">
            <ul>
                <li><a href="" id="login" onClick={()=>navigate("/")}>Login Here</a></li>
                <li><a href="" id="register" onClick={()=>navigate("/register")}>Register</a></li>
            </ul>
            </div>
        </nav>
        <div>
        <div className="welcome up">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
        </div>
            <form action="" onSubmit={handleSignUp} className="form" >
                <h1 >Register</h1>
                <input type="email"  placeholder="Email address"  value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p style={{marginBottom:"10px",marginTop:"-10px"}}>Password must include at least one special character and a numeric character</p>
                <input type="password" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <input type="submit" value="Register Now" style={{width:"100%",fontSize:"16px",background:"#f19537",color:"#ffffff",fontWeight:"bold",padding:"10px 12px",border:"none"}}/>
                <p className="already" style={{fontSize:"16px"}}>Already have an account? <span onClick={()=>navigate("/")} style={{color:"#f19537",cursor:"pointer"}}>Login Now</span></p>
            </form>
     </div>
    </div>
    <Footer/>
    </>
    )
}
export default Register;
