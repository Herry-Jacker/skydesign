import { Navigate } from "react-router-dom";
import { useLoginContext } from "../store/LoginContextApi";

const RouteGuard = ({children}) => {
    const { loggedIn } = useLoginContext();
    if(loggedIn) return children;
    else return <Navigate to="/login" replace />
}

export default RouteGuard;