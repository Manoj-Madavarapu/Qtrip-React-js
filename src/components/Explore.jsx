import React from "react";
let Explore=()=>{
    return(
        <>
        <div className="explore_div">
            <div className="explore_heading">
            <h1>Explore all adventures</h1>
            <p>Here's a list of places that you can explore in city</p>
            </div>
            <div className="input_tags">
               <p>Filters :</p>
               <div>
                  <select className="select">
                      <option value="">Filter by Duration (Hours)</option>
                      <option value="">0-2 Hours</option>
                      <option value="">2-6 Hours</option>
                      <option value="">6-12 Hours</option>
                      <option value="">12+ Hours</option>
                  </select>
                  <button className="clear_btn">Clear</button>
                </div>
               <div>   
                   <select className="select">
                      <option value="">Add Category</option>
                      <option value="">Cycling</option>
                      <option value="">Party Spots</option>
                      <option value="">Hill Gateways</option>
                      <option value="">Serene Beaches</option>
                    </select>
                    <button className="clear_btn">Clear</button></div>
               <div className="explore_input"><input type="text" placeholder="Search adventures" className="select"/><button className="clear_btn">Clear</button></div>
            </div>
        </div>
        </>
    )
}
export default Explore;