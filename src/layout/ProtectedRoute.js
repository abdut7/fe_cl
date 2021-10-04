
import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({component: Component, ...restOfProps}){
    const isLogged  = window.localStorage.getItem('is_logged',false);
    return(
        <Route {...restOfProps}
            render={(props)=>(isLogged === 'true'?<Component {...props}></Component>:<Redirect to='/'></Redirect>)}
        ></Route>
    )
}

export default ProtectedRoute