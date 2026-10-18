import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from '../page/Register'
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetail from "../page/NewsDetail";
import PrivateRoute from "../provider/PrivateRoute";
import ForgotPass from "../page/ForgotPass";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            loader: () => fetch("/news.json"),
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json")
                },
            ],
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                },
                {
                    path: 'forgot-password',
                    element: <ForgotPass></ForgotPass>
                }
            ]
        },
        {
            path: '/news-details/:id',
            element: <PrivateRoute>
                <NewsDetail></NewsDetail>
            </PrivateRoute>,
            loader: () => fetch('/news.json')
        },
        {
            path: '/*',
            element: <h2>Error Layout</h2>
        }
    ]
)


export default router