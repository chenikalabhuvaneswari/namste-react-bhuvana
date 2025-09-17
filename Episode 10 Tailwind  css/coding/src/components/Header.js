import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const  [btnstate,setbtnstate] = useState("login")
    const  onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log( "this is userContext data ", loggedInUser);

    const cartItems = useSelector((store)=> store.cart.items);
    
    return (
        <div className="flex  p-2 m-2 bg-orange-300 rounded-xl justify-between">
            <div >
                <img className="!w-24 rounded-3xl" 
    
                    src="https://img.freepik.com/free-vector/food-logo-template_23-2148766603.jpg" 
                    alt ="food-logo" 
                />
            </div>


            <div >
                <ul className="flex">
                    <li className="p-2 m-2 hover:text-pink-900">OnlineStatus : {onlineStatus?"🟩":"🔴"} </li>
                    <li className="p-2 m-2 hover:text-pink-900" >
                        <Link to = "/" >Home </Link>
                        
                    </li>
                    <li className="p-2 m-2 hover:text-pink-900">
                        <a href= "/about">About us</a>   
                         {/* i kept like this only to know the difference between the achor tag and Link conponen */}
                    </li>
                    <li className="p-2 m-2 hover:text-pink-900">
                        <Link to ="/contact">Contact US</Link> 
                    </li>
                    <li className="p-2 m-2 hover:text-pink-900" >Help</li>
                    <li className="p-2 m-2 hover:text-pink-900" >Grocery</li>
                    <li className="p-2 m-2 hover:text-pink-900" >
                        <Link to ="/cart"> 🛒 ( {cartItems.length}) </Link> 
                    </li>
                    <button 
                    className = "p-2 m-2 hover:text-pink-900"
                    onClick= { () =>{   (btnstate === "login" )?
                    setbtnstate("logout"):
                    setbtnstate("login");
                    }}>
                        {btnstate} 
                    </button>
                    <li className="p-2 m-2 font-bold hover:text-pink-900">{loggedInUser}</li>
                </ul>
            </div>

        </div>

    );
};

export default Header;


