import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "../../../core/custom-types";
import { getUserFromLocalDb } from "../services/localStorage.infrastructure";

export const PrivateRoute = (props: PropsWithChildren) => {
    const user = getUserFromLocalDb();

    if (user === null || ! user.accessToken) {
        return <Navigate to='/login' replace></Navigate>
    }
    
    return props.children;
} 