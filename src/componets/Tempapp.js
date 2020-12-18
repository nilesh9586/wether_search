import React, { useEffect, useState } from 'react';
import './css/style.css';
/* cc72afbe4c8f025dc6742ed58b5c3c83 */
const Tempapp = ()=>{

    const [city,setCity]=useState('null');
    const [search,setSearch]=useState("Gandhinagar");

    const APIKEY='cc72afbe4c8f025dc6742ed58b5c3c83';

    useEffect (()=>{
        const fecthApi = async () => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}`;
            const response = await fetch(url);
           // console.log(response);
           const resjson = await response.json();
           //console.log(resjson);

           setCity(resjson.main);



        };
        fecthApi();
    },[search]); 
   
   

    return (
        <> 
            <div className="data">
            <input 
             className="inputfield"
              type="search"
             placeholder="search city"
             onChange={(event)=>{ setSearch(event.target.value) }}
        />

            </div>
            <div className="body">
            
            <div className="box">
          
         
           
            {!city ? (
              <p>No data found</p>
            ): (
                <div>
                <div className="info">
               
            
                <h2 className="loaction">
                <i className="fa fa-street-view" aria-hidden="true"> {search}</i>

                </h2>
                <h1 className="temp">
                {city.temp} cel
                </h1>
                <h3 className="tempmin_max">

                {city.temp_min} cel |{city.temp_max} cel
                </h3>

            </div>
                
            <div className="wrapper">
            <div className="wave"></div>
            </div>
            </div>

            )

            }
              
          
            </div>
          
            </div>
       
            
          
        </>
    );
}
export default Tempapp;