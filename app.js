import React from "react";
import ReactDOM from "react-dom/client";

/* <div id="parent">
    <div id="child1">
        <h1 id ="h1heading">i am h1 tag </h1>
        <h2 id = "h2heading">i am h22 tag</h2>
    </div>
    <div id ="child2">
        <h1 id ="h1heading">i am h1 tag </h1>
        <h2 id = "h2heading">i am h22 tag</h2>
    </div>
</div> */

// const headding = React.createElement("h1",{id:"heading"},"hello world from react ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headding)


// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{id:"h1heading"},"i am h1 tag"),
//         React.createElement("h2",{id:"h2heading"},"i am h2 tag"),
//     ]),
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{id:"h1heading"},"i am h1 tag"),
//         React.createElement("h2",{id:"h2heading"},"i am h2 tag"),
//     ]),
// ]);

const heading = React.createElement("h1",{className:"b.tech"},"i am h1 1tags from react ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)






            