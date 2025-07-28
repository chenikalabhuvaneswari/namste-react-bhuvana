import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import {SWIGGY_MENU_APIcopy , SWIGGY_FULL_API}  from "../utils/Constants";



const RestaurantMenu = () => {
    const {resid}  = useParams();  
    
    const [resInfo , setresInfo] = useState(null);

    useEffect(() =>{
        fetchmenu();
    }, [])
    
    const fetchmenu = async () =>{
        const response = await fetch(SWIGGY_MENU_APIcopy +resid);
        const jsonData = await response.json();
        console.log(jsonData);
        setresInfo(jsonData?.data);
    }
    
    if(resInfo===null)
        return <Shimmer/>
    
    const {name, costForTwoMessage ,cuisines,avgRating} = resInfo?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    // console.log(itemCards)



  return (
    <div>
        <h1>{name}</h1>
        <h2>{cuisines}- {costForTwoMessage}  , {avgRating} rating  </h2>
        <ul>

            {itemCards.map(item =>  
                <li key = {item.card.info.id} > 
                    {item.card.info.name} -  Rs. { item.card.info.price ||  item.card.info.defaultPrice} 
                </li> 
            )}

            {/* <li>{itemCards[0].card?.info?.name}</li>
            <li>{itemCards[1].card?.info?.name}</li>
            <li>{itemCards[2].card?.info?.name}</li>
            <li>{itemCards[3].card?.info?.name}</li>
            <li>{itemCards[4].card?.info?.name}</li> */}


        </ul>
    </div>
  )
}

export default RestaurantMenu;