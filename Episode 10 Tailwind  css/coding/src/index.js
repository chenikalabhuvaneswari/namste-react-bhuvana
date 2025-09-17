import React , {Suspense, lazy, useEffect}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import About from "./components/About";
import {  Outlet, RouterProvider , createBrowserRouter} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useEffect , useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const AboutLazy = lazy(() => import("./components/About"))
//dynamic import 
// lazy coding 
//code splitting 
//on code demand 



//App is a functional componenet 

const  AppLayout = () => {
    const [userNmae , setUserNmae] = useState();

    useEffect(() =>{
        // makes an api call and get some data 
        const data = {
            name :"bhuvvana"
        }
        setUserNmae(data.name)

    }, []);

    
    return (

        
        <div className="app">
        <Provider store ={appStore}>
        <UserContext.Provider value = {{loggedInUser:userNmae ,setUserNmae} }>
            <Header/>

            <Outlet />
            <Footer/>
        </UserContext.Provider>
        </Provider>

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
            },
            {
                path:"/cart",
                element:<Cart/>,
            },

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