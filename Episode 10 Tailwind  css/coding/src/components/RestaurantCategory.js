import ItemList from "./ItemList";
import { useState } from "react";

//create usestate variable 



const RestaurantCategory = ({data, showItems , setShowIndex}) =>{
    const handleclick = () =>{
        setShowIndex()

    }



    return (
        <div>
         {/* Accordian Header */}
            <div className="w-6/12 mx-auto   bg-green-100  my-4 shadow-md p-4">
                <div 
                    className=" flex justify-between cursor-pointer" 
                    onClick={handleclick}
                    
                >
                    <span className="pd-4 "> {data.title} ({data.itemCards.length})</span>
                    <span>🔻</span> 
                    
                </div>
                {/*  { Accordian body }  */}
                {/*  lets create another component "itemList" */}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>


            

        </div>
    )
};

export default RestaurantCategory;