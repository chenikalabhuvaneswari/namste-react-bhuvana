import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";



//App is a functional componenet 

const  AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

const AppRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout /> ,
        children:[
            {
                path:"",
                element:<Body/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            }

        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); 
root.render(<RouterProvider router = {AppRouter} />)