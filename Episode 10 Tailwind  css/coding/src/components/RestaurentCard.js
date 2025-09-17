import { CDN_URL } from "../utils/Constants";


const RestaurentCard = (props) =>{
    const { restaurentData } = props;
    const {cloudinaryImageId,name,areaName,avgRating,cuisines,costForTwo,deliveryTime}=restaurentData?.info;
    return(
        <div className="restaurant-card">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt= {name}
                className="restaurent-logo" 
            />
            <div className="restaurent-details">
                <h3>
                    {name.slice(0,22)}
                    {name.length >22 ? "...":""}

                </h3>
                <h3>{avgRating} starts</h3>
                <h3>{costForTwo}</h3>
                <h3>{deliveryTime} mins</h3>
                <p className="cuisine">{cuisines.join(",")}</p>
                <p className="locations">{areaName}</p>


            </div>

        </div>

    );

}

export const withOpenLabel = (WrappedComponent) =>{
    return (props) =>{

        return (

            <div>
                <label className="rounded-lg bg-black text-white absolute shadow-xl">Opened</label>
                <WrappedComponent {...props}/>
                
            </div>
        )
    }
}


export default RestaurentCard;