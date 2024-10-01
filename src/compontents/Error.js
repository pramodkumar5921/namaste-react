import { useAsyncError, useRouteError } from "react-router-dom";
import { startTransition } from 'react';

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
        <h1>Opps!!!</h1>
        <h2>Something Went Wrong!!</h2>
        <h2>{err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error;
