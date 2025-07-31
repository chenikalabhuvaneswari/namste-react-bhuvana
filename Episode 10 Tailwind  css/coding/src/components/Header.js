import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
const  [btnstate,setbtnstate] = useState("login")
const  onlineStatus = useOnlineStatus();


    return (
        <div className  ="flex">
            <div >
                <img  
                    
                    src="https://img.freepik.com/free-vector/food-logo-template_23-2148766603.jpg" 
                    alt ="food-logo" 
                />
            </div>
            <div className ="nav-items ">
                <ul className="flex">
                    <li>OnlineStatus : {onlineStatus?"🟩":"🔴"} </li>
                    <li className= "bg-orange-950" >
                        <Link to = "/" >Home </Link>
                        
                    </li>
                    <li>
                        <a href= "/about">About us</a>   
                         {/* i kept like this only to know the difference between the achor tag and Link conponen */}
                    </li>
                    <li>
                        <Link to ="/contact">Contact US</Link> 
                    </li>
                    <li>Help</li>
                    <button 
                    // className = "login-btn"
                    onClick= { () =>{   (btnstate === "login" )?
                    setbtnstate("logout"):
                    setbtnstate("login");
                    }}>
                        {btnstate} 
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;