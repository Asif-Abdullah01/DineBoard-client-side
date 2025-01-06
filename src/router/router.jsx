import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import MyAddedFoods from "../pages/MyAddedFoods";
import AddFood from "../pages/AddFood";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>ERROR OCCURED</h2>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/foods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/my-added-foods',
                element: <PrivateRoute><MyAddedFoods></MyAddedFoods></PrivateRoute>
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);


export default router;