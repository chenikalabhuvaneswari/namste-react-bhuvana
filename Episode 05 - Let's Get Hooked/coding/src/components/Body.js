import RestaurentCard from "./RestaurentCard";
import {restaurantList}  from "../utils/MockData.js";

import { useState,useEffect } from "react";


const Body = () => {
    
    const [allrestaurents ,setallrestaurents ] = useState(restaurantList);

    const [ListOfRestaurents , setListOfRestaurents] = useState(restaurantList);


    useEffect(() =>{
        fetchData();
       
    }, []);

    const fetchData =async () =>{
        const  data = await fetch("https://corsproxy.io/?key=e99a8476&url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3049003&lng=78.54762960000001&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null  ");
        console.log(data);
        const jsonData = await data.json();
        console.log(jsonData);
    
    }
    console.log("before useEffect ")

    // LOCAL state variable - super powerful variable 
    //  hook is normal javascript function 

    return (

        <div className="body">



            <div className="filter">
            
                <button  className=" filter-btn" onClick={() =>{
                    const filteredList = ListOfRestaurents.filter(
                        (res) => res.info.avgRating> 4
                    );
                    setListOfRestaurents(filteredList);
                    console.log(filteredList);
                }} >
                    Top Rated restaurants
                </button>
                <button className="reset-btn" onClick={() =>{
                    setListOfRestaurents(allrestaurents)

                    
                }} >
                    Show all 
                </button>


            </div>


            <div className="restaurent-container">
                {ListOfRestaurents.map((restaurenttt) => (
                    <RestaurentCard  
                        key ={restaurenttt.info.id}
                        restaurentData = {restaurenttt}
                    />
                    ))}
                
            </div>

        </div>

    );

};





export default Body;