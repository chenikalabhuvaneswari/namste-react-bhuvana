import RestaurentCard from "./RestaurentCard";
import {restaurantList}  from "../utils/MockData.js";

import { useState,useEffect } from "react";


const Body = () => {
    
    const [allrestaurents ,setallrestaurents ] = useState([]);

    const [ListOfRestaurents , setListOfRestaurents] = useState([]);


    useEffect(() =>{
        fetchData();
    
    }, []);

    const fetchData =async () =>{
        try{
            const  data = await fetch("https://pastebin.com/raw/0QcdEDBL"

            );
            if(!data.ok){
                
                throw new Error("error in fetching the data ")   //writing own error 
            }
            const jsonData = await data.json(); 
            console.log("this is useEffect data",jsonData);
            setListOfRestaurents(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setallrestaurents(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);


        }catch(error){
            console.log("fetchd error message ", error.message);
        }

    }

    console.log("before useEffect ")

    // LOCAL state variable - super powerful variable 
    //  hook is normal javascript function 

    return (

        <div className="body">

            <div className="filter">
            
                <button  className=" filter-btn" onClick={() =>{
                    const filteredList = ListOfRestaurents.filter(
                        (res) => res.info.avgRating> 4.7
                    );
                    setListOfRestaurents(filteredList);

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