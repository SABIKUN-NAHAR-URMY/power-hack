import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../BillingPage/BillingPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Registration from "../Registration/Registration";
import UpdateBilling from "../UpdateBilling/UpdateBilling";

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
                element: <BillingPage></BillingPage>
            },
            {
                path:'/update-billing/:id',
                element: <UpdateBilling></UpdateBilling>
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
