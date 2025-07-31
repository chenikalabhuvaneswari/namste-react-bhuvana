import React , {Suspense, lazy}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import About from "./components/About";
import {  Outlet, RouterProvider , createBrowserRouter} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AboutLazy = lazy(() => import("./components/About"))
//dynamic import 
// lazy coding 
//code splitting 
//on code demand 



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
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:
                <Suspense fallback= {<h1>loading ...</h1>}>
                    <AboutLazy/>
                </Suspense>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu/>,
            }

        ],
        errorElement:<Error/>,


    },

])


// const AppRouter = createBrowserRouter([
//     {
//         path:"/",
//         element: <AppLayout/>,
//         errorElement:<Error/>,
//     },
//     {
//         path:"/about",
//         element: <About/>
//     },
//     {
//         path:"/contact",
//         element: <Contact/>
//     },
// ])
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); 
root.render(<RouterProvider router = {AppRouter} />)