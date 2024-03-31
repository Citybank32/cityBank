import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { isLoginContext } from "../context";

export default function Protected({children}){
    const {login} = useContext(isLoginContext);
   
    if(!login){
        return <Navigate to='/' replace/>
    }

    return children;
}