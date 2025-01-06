import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>ERROR OCCURED</h2>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);


export default router;