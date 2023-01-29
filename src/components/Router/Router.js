import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../BillingPage/BillingPage";
import Home from "../Home/Home";
import Main from "../Main/Main";

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
                path:'/billingPage',
                element: <BillingPage></BillingPage>
            },
        ]
    }
])
