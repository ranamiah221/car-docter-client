import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-bars loading-xs"></span>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;