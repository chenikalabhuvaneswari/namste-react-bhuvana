import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";

//App is a functional componenet 

const  App = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);