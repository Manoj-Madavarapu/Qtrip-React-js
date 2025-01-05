import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Nav from "./Nav"
import Footer from "./Footer"
let About=()=>{
    let [api,setapi]=useState();
    let location=useLocation()
    let data=location.state.x
    // console.log(data.id);
    useEffect(()=>{
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${data.id}`)
        .then(res=>res.json()).then(val=>{
            setapi(val)
            // console.log(api)
        })
        .catch(err=>console.log(err))
    },[])
    if (!api) {
        return <p>Loading...</p>;
    }
    // If you remove the if (!api) block:
    // The component attempts to access api.val immediately after mounting.
    // Since the api state hasn’t been updated yet, api.val is undefined.
    // Accessing properties like name on undefined (api.val.name) throws the error: Cannot read properties of undefined.
    return(
        <>
        <Nav/>
        <div className="about_outer">
        <div className="about">
           <h1>{api.name}</h1>
           <h2>{api.subtitle}</h2>
           <Carousel >
                {api.images.map((x,index)=>{
                  return(
                    <div key={index}>
                      <div className="about_images">
                         <img src={x} alt="images"/>
                     </div>
                     </div>
                  )
                })}
            </Carousel>
            <h5>About the Experience</h5>
            <p>{api.content}</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default About;