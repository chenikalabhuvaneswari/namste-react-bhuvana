import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex , setShowIndex] = useState(null)

    const {resid}  = useParams();  
    const resInfo = useRestaurantMenu(resid);
    if(resInfo===null)
        return <Shimmer/>
    
    const {name, costForTwoMessage ,cuisines,avgRating} = resInfo?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>{
       return  category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log("The list of categories: " , categories);

  return (
    <div className="text-center bg-orange-200 rounded-xl p-4 m-4 ">
        <h1 className="font-bold py-4 text-2xl">{name}</h1>
        <h2>{cuisines}- {costForTwoMessage}  , {avgRating} rating  </h2>
        {
            categories.map((category , index )=> 
            <RestaurantCategory
               key = { category.card.card.categoryId}  
               data= {category.card.card} 
               showItems={ index===showIndex ? true :false } 
               setShowIndex = {() => setShowIndex(index)}
            />)
        }


    </div>
  )
}

export default RestaurantMenu;