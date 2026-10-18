import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loadings from "../page/Loading"


const PrivateRoute = ({ children }) => {

    const { user, Loading } = useContext(AuthContext)
    const location = useLocation()

    console.log(location.pathname)


    if (Loading) {
        return <Loadings></Loadings>
    }


    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;