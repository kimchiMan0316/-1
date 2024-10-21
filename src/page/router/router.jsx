import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/layout";
import Home from "../page/home/home";
import Employment from "../page/employment/employment";
import Untity2 from "../page/untity2/untityCulture";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
        ]
    },
    {
        path:"/employment",
        element:<Employment/>
    },
    {
        path: "/untity2",
        element:<Untity2/>
    }
])