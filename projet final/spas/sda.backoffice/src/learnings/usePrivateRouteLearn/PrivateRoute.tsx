import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PropsWithChildren<P = unknown> = P & {children: ReactNode};

export const PrivateRoute = (props: PropsWithChildren) => {
    const value = 0;

    if (value === 0) {
        return <Navigate to='/login' replace></Navigate>
    }
    
    return props.children;
}