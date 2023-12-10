import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Example from "./Example";
import Functionroute from "./FunctionCompo/Functionroute";


const Classroutes = React.lazy(()=> import('./Class Component/Classroutes'));

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/></>
    },
    {
        path: "home",
        element: <><Home/></>
    },
    {
        path: "Contact",
        element: <><Navbar/><Contact/></>
    },
    {
        path: "about",
        element: <><Navbar/><About/></>
    },
    {
        path: "product",
        element: <><Navbar/><Product/></>
    },
    {
        path: "example",
        element: <><Navbar/><Example/></>,
        children: [
            {  
            path:"Classcompo/*",  
            element:<Suspense fallback={<h2>Loading...</h2>}><Classroutes/> </Suspense>
            },
            {  
                path:"Functioncompo/*",  
                element:<Suspense fallback={<h2>Loading...</h2>}><Functionroute/> </Suspense>
            }
            
        ]
    }
])
export default Mainrouter