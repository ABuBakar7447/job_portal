import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Apply from "../Pages/Home/Apply";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn";
import SignOut from "../Pages/SignOut";
import PrivateRoute from "./PrivateRoute";

export const routes =createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:
    [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/login',
            element:<SignOut></SignOut>
        },
        {
            path:'/details',
            element:<PrivateRoute><Apply></Apply></PrivateRoute>
        }
    ]
}])