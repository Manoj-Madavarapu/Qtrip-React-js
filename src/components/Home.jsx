import React, { useEffect, useState } from "react";
import Nav from "./Nav"
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
let Home=()=>{
    let [api,setapi]=useState([]);
    let [search,setsearch]=useState("");
    let [loading,setloading]=useState(true)
    useEffect(()=>{
        fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
        .then(res=>res.json())
        .then(data=>{
            setapi(data);
            setloading(false);
        })
        .catch(err=>{
            // alert("Data not found");
            console.log(err);
        })
    },[])
    // console.log(search)
    let navigate=useNavigate();
    let filteredCities=api.filter(x=>x.city.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
        <Nav/>
        <div className="home">
            <div className="welcome">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
                <input type="text" placeholder="Search a City"  onChange={(e)=>setsearch(e.target.value)}/>
            </div>
            <div className="cities">
            {loading ?(<p>Loading....</p>):
            (filteredCities.length > 0 ? (
            filteredCities.map((x) => (
              <div key={x.id}>
                <div className="city_div" onClick={() => navigate(`/city/${x.id}`)}>
                  <div className="img_div"><img src={x.image} alt={x.city}/></div>
                  <div className="cont">
                    <h4>{x.city.toUpperCase()}</h4>
                    <p>{x.description.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
              <h3 className="city_not_found">Sorry.... city not found</h3>
          ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;


