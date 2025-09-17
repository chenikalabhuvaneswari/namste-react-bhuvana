import RestaurentCard ,{withOpenLabel} from "./RestaurentCard";
// import {restaurantList}  from "../utils/MockData.js";
import { SWIGGY_API_URL, SWIGGY_MOCK_API } from "../utils/Constants";
import {Shimmer} from "./Shimmer";
import { useState,useEffect , useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
 import UserContext from "../utils/UserContext";



const Body = () => {
    
    const [allrestaurents ,setallrestaurents ] = useState([]);

    const [ListOfRestaurents , setListOfRestaurents] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    const RestaurantOpened = withOpenLabel(RestaurentCard);


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
    if (onlineStatus === false ){
        return(
            <h1>You re offline . please use     internet connectiom</h1>
        )
    }

    const { setUserNmae , loggedInUser} = useContext(UserContext); 

    



    return ListOfRestaurents.length === 0? <Shimmer/>: (

        <div className="">

            <div className="p-2 m-2  flex justify-between  ">
                <div >
                <input 
                    className="placeholder:text-gray-500 placeholder:italic  mx-2 px-2 border border-solid border-black rounded-2xl "
                    type="text"
                    placeholder="search-restaurent...."
                    name="search"
                    value= {searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value)

                    }}
                />

                <button
                    className=" "
                    onClick={() =>{

                        const searchedRestauresnt = allrestaurents.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfRestaurents(searchedRestauresnt);
                    }}
                >
                     🔍 
                </button>

                </div>
            
                <button  
                    className=" placeholder:text-gray-500 placeholder:italic  mx-2 px-2 border border-solid border-black rounded-2xl bg-orange-200" 
                    onClick={() =>{
                        const filteredList = allrestaurents.filter(
                            (res) => res.info.avgRating> 4.0
                        );
                    setListOfRestaurents(filteredList);

                }} >
                    Top Rated restaurants
                </button>

                <button className="placeholder:text-gray-500 placeholder:italic  mx-2 px-2 border border-solid border-black rounded-2xl  bg-orange-200" 
                onClick={() =>{
                    setListOfRestaurents(allrestaurents)
                }} >
                    Show all 
                </button>
                <label>UserName:</label>
                <input 
                    className="placeholder:text-gray-500 placeholder:italic  mx-2 px-2 border border-solid border-black rounded-2xl "
                    type="text"
                    placeholder="search-username...."
                    name="search"
                    value= {loggedInUser}
                    onChange={(e)=> {
                        setUserNmae (e.target.value)

                    }}
                />
                


            </div>
            


            <div className="flex flex-wrap gap-4 p-10 m-8">
                {ListOfRestaurents.map((restaurent) => (
                    <Link  
                        key ={restaurent.info.id} 
                        to = {`/restaurant/${restaurent.info.id}`}
                        className="w-64 "
                    >
                        {
                            restaurent.info.isOpen ? 

                            <RestaurantOpened restaurentData = {restaurent}/> :
                        
                            <RestaurentCard  restaurentData = {restaurent}/>
                        }
                    </Link>
                    ))}
                
            </div>

        </div>

    );

};


export default Body;