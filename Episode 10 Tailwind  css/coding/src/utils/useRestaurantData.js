import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./Constants";

const useRestaurantData = () =>{
        const [allrestaurents ,setallrestaurents ] = useState([]);
    
        const [ListOfRestaurents , setListOfRestaurents] = useState([]);

    useEffect(() =>{
        fetchData(); 
    }, []);  

    const fetchData =async () =>{
        try{
            const  responsePromise  = await fetch(SWIGGY_API_URL);   //gives the response object 

            const jsonData = await responsePromise.json(); 
            console.log("this is useEffect  call back function data in body.js",jsonData);
            const Restaurents= jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log("I extraxted the list of restaurants from swiggy api in body.js",Restaurents);
            setListOfRestaurents(Restaurents); 
            setallrestaurents(Restaurents);


        }catch(error){
            console.log("fetchd error message ", error.message);
        }

    }

    return {ListOfRestaurents: ListOfRestaurents || [],
  setListOfRestaurents,
  allrestaurents: allrestaurents || []};

}

export default useRestaurantData;