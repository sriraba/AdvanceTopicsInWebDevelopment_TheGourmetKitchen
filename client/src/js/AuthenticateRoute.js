import React, { useContext } from "react";
import { Outlet, Navigate } from 'react-router-dom'
import ApiAuthentication from './ApiAuthentication';


const AuthenticateRoute = () => {
    const authApi = useContext(ApiAuthentication);
    console.log(authApi.auth);

    return(
        authApi.auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default AuthenticateRoute