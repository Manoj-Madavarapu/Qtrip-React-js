import React, { useState } from "react";
import {Navigate, Outlet} from "react-router-dom";
let ProtectedRouting=()=>{
    let [state,setstate]=useState(true);
    return(
        state ? <Outlet/> : <Navigate to="/"/>
    )
}
export default ProtectedRouting;