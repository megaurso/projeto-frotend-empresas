import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


export const ProtectedRoutes = () => {
    const { usersOn } = useContext(UserContext)
    return usersOn ? <Outlet /> : <Navigate to="/" />;
}