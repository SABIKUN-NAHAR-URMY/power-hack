import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../BillingPage/BillingPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Registration from "../Registration/Registration";
import UpdateBilling from "../UpdateBilling/UpdateBilling";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/billing-list',
                element: <PrivateRoute><BillingPage></BillingPage></PrivateRoute>
            },
            {
                path:'/update-billing/:id',
                element: <PrivateRoute><UpdateBilling></UpdateBilling></PrivateRoute>
            },
            {
                path:'/registration',
                element: <Registration></Registration>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])
