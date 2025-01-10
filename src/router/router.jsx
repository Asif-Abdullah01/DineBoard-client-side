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
import ErrorElement from "../components/ErrorElement";
import FoodDetails from "../pages/FoodDetails";
import Purchase from "../pages/Purchase";
import UpdateFood from "../components/UpdateFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:  () => fetch(`${import.meta.env.VITE_API_URL}/foods`)
            },
            {
                path: '/foods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/foods/:id',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/update/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
            },
            {
                path: '/foods/purchase/:id',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>
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