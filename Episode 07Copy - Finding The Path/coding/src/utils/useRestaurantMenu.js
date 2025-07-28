import { useEffect } from "react";
import { SWIGGY_MENU_APIcopy } from "./Constants"
import { useEffect,useState } from "react";





const useRestaurantMenu = (resid) => {
    const [resInfo , setresInfo]= useState(null)

    useEffect(() =>{
        fetchData();

    },[]);
    const fetchData = async  () =>{
        const  response = await fetch(SWIGGY_MENU_APIcopy + resid);
        const jsonData = await response.json();
         
        setresInfo(jsonData.data)
        
    }

  return resInfo;
}

export default useRestaurantMenu