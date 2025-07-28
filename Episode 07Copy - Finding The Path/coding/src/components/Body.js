import RestaurentCard from "./RestaurentCard";
// import {restaurantList}  from "../utils/MockData.js";
import { SWIGGY_API_URL, SWIGGY_MOCK_API } from "../utils/Constants";
import {Shimmer} from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {
    
    const [allrestaurents ,setallrestaurents ] = useState([]);

    const [ListOfRestaurents , setListOfRestaurents] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    console.log("before useEffect ")

    // LOCAL state variable - super powerful variable 
    //  hook is normal javascript function 
    
    //conditional rendering 
    return ListOfRestaurents.length === 0? <Shimmer/>: (

        <div className="body">

            <div className="filter">
                <input 
                    className="search-bOX"
                    type="text"
                    placeholder="search-restaurent"
                    value= {searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value)

                    }}
                />

                <button
                    className="search-button"
                    onClick={() =>{

                        const searchedRestauresnt = allrestaurents.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRestaurents(searchedRestauresnt);
                    }}
                >
                    search
                </button>
            
                <button  
                    className=" filter-btn" 
                    onClick={() =>{
                        const filteredList = allrestaurents.filter(
                            (res) => res.info.avgRating> 4.0
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
                {ListOfRestaurents.map((restaurent) => (
                    <Link  
                        key ={restaurent.info.id} 
                        to = {`/restaurant/${restaurent.info.id}`}
                    >
                        
                        <RestaurentCard  restaurentData = {restaurent}/>
                    </Link>
                    ))}
                
            </div>

        </div>

    );

};


export default Body;