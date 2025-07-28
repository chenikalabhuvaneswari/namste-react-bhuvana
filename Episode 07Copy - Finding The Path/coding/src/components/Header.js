import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
const  [btnstate,setbtnstate] = useState("login")


    return (
        <div className  ="header">
            <div className="logo-container">
                <img  
                    className="logo"
                    src="https://img.freepik.com/free-vector/food-logo-template_23-2148766603.jpg" 
                    alt ="food-logo" 
                />
            </div>
            <div className ="nav-items ">
                <ul className="unorderd list">
                    <li>
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