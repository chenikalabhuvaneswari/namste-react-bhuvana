// import React from "react";
// import ReactDOM from "react-dom/client";

// /* <div id="parent">
//     <div id="child1">
//         <h1 id ="h1heading">i am h1 tag </h1>
//         <h2 id = "h2heading">i am h22 tag</h2>
//     </div>
//     <div id ="child2">
//         <h1 id ="h1heading">i am h1 tag </h1>
//         <h2 id = "h2heading">i am h22 tag</h2>
//     </div>
// </div> */

// // const headding = React.createElement("h1",{id:"heading"},"hello world from react ");
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(headding)


// // const parent = React.createElement("div",{id:"parent"},[
// //     React.createElement("div",{id:"child1"},[
// //         React.createElement("h1",{id:"h1heading"},"i am h1 tag"),
// //         React.createElement("h2",{id:"h2heading"},"i am h2 tag"),
// //     ]),
// //     React.createElement("div",{id:"child1"},[
// //         React.createElement("h1",{id:"h1heading"},"i am h1 tag"),
// //         React.createElement("h2",{id:"h2heading"},"i am h2 tag"),
// //     ]),
// // ]);

// //react element 




// //react component 

// const HeadingComponenet  = () =>  {
//     return (
//     <div id = "container "  className= "myclassh">
//         {10+20}
//         <h1>This is a Heading 1</h1>
//         <h2>This is a Heading 2</h2>
//         <h3>This is a Heading 3</h3>
//     </div>
//     );
// }

// // const heading = React.createElement("h1",{className:"b.tech"},"i am h1 1tags from react ");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponenet/>)   // rendering the element


//  --------------------------------Episode 4 ---------------------------------------
import React from "react";

import ReactDOM from "react-dom/client";






const Header = () =>{
    return (
        <div className  ="header">
            <img className="headerPhoto" src ="/tasty-trails-logo.png"  alt ="food logo"/>
            <div className ="nav-items ">
                <ul className="unorderd">
                    <li>Home </li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    );
};




            




const  App = () => {
    return (
        <div className="app">
            <Header/>


        </div>

    
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);









            