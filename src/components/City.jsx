import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Export from "./Explore";
import Footer from "./Footer";
import Explore from "./Explore";
import { useNavigate, useParams } from "react-router-dom";
let City=()=>{
   let [api,setapi]=useState([]);
   let [search,setsearch]=useState("");
   let [category,setCategory]=useState("");
   let {id}=useParams()
   // it is used to extract city from the url    
   useEffect(()=>{
    fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${id}`)
    .then(res=>res.json())
    .then(data=>setapi(data))
    .catch(err=>console.log(err))
   },[id]);
   let navigate=useNavigate();
   let filteredData=api.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()) && (category==="" || x.category===category));
   
   // Items are filtered if their name matches with the search value and 
   // Either no category is selected (category === "") or the item's category matches the selected category.

    return(
        <>
        <Nav/>
        <div className="explore_div">
            <div className="explore_heading">
            <h1>Explore all adventures</h1>
            <p>Here's a list of places that you can explore in city</p>
            </div>
            <div className="input_tags">
               <p>Filters :</p>
               <div>
                  {/* <select className="select">
                      <option value="">Filter by Duration (Hours)</option>
                      <option value="">0-2 Hours</option>
                      <option value="">2-6 Hours</option>
                      <option value="">6-12 Hours</option>
                      <option value="">12+ Hours</option>
                  </select>
                  <button className="clear_btn">Clear</button> */}
                </div>
               <div>   
                   <select className="select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                      <option value="">Add Category</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Party">Party Spots</option>
                      <option value="Hillside">Hill Gateways</option>
                      <option value="Beaches">Serene Beaches</option>
                    </select>
                    <button className="clear_btn" onClick={()=>setCategory("")}>Clear</button></div>
               <div className="explore_input">
                <input type="text" placeholder="Search adventures" value={search} className="select" onChange={(e)=>setsearch(e.target.value)}/>
                <button className="clear_btn" onClick={()=>setsearch("")}>Clear</button>
                </div>
            </div>
        </div>


        <div className="bangalore">
            {/* <Explore/> */}
             <div className="explore All"></div>
             <div className="fetch_data">
                {filteredData.length >0 ?(
                filteredData.map(x=>{
                    return(
                        <div key={x.id} className="cards" onClick={()=>navigate("/about",{state:{x}})}>
                            <div className="category">{x.category}</div>
                            <img src={x.image} alt="images" />
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className="four">
                                <h4>{x.name}</h4>
                                <p>₹ {x.costPerHead}</p>
                            </div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <h4 className="duration">Duration</h4>
                                 <p>{x.duration} Hours</p>
                            </div>
                        </div>
                    )
                })) :
                (<h1>No Adventure Found</h1>)
                }
             </div>
        </div>
        <Footer/>
        </>
    )
}
export default City;