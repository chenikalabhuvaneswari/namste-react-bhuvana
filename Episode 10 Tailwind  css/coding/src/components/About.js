
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{


    constructor(props){
        super(props)
        console.log("parent constructor");

    }
    componentDidMount(){
        console.log("parent did mount ")

    }

 
    render(){
        console.log("parent render")
        return (    
        <div>
            <h1>About us </h1>
            <h2>this is the about page</h2>
            <div>
                loggedin User :
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            

            {/* <User company ="WEB technologia " location = "vijayawada" name = "bhuvaneswari" /> */}
            <UserClass company ="WEB technologia " location = "vijayawada" name = "first" />
            <UserClass company ="WEB technologia " location = "vijayawada" name = "second" />
            <UserClass company ="WEB technologia " location = "vijayawada" name = "third" />
        </div>
    )
    }
}
// const About = () =>{
//     return (    
//         <div>
//             <h1>About us </h1>
//             <h2>this is the about page</h2>

//             {/* <User company ="WEB technologia " location = "vijayawada" name = "bhuvaneswari" /> */}
//             <UserClass company ="WEB technologia " location = "vijayawada" name = "bhuvaneswari" />
//         </div>
//     )

// };

export default About;
