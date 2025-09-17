import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants.js";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({items}) =>{
    console.log("itemsList " ,items);
    const dispatch= useDispatch();

    const handleAdItem = (item) =>{
        //dispatch an action 
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) =>(
                <div 
                    key = {item.card.info.id} 
                    className="my-4 border-b-2 text-left flex  ">
                    <div className="w-9/12 ">
                        <div className=" py-2" >
                            <span className="text-start">{item.card.info.name}</span>
                            <span className=""> -  ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs py-5">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12  p-4 ">
                        <div className="absolute mt-20 ml-8">
                            <button 
                                className="bg-black text-white rounded-lg shadow-lg"
                                onClick={() => {handleAdItem(item)}}
                                >
                                Add +
                            </button>
                        </div>
                        <img  
                            src={CDN_URL+item.card.info.imageId}
                            alt="FOOD item"
                            className="w-full "
                        />

                    </div>    
                    

                    
                </div>
            ))}
        </div>

    )
}

export default ItemList;