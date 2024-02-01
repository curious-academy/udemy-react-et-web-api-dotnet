import { useState } from "react";
import { AuthenticationContext, AuthenticationState, AuthenticationStateWithLogin, initialUserState } from "../store";
import { PropsWithChildren } from "../../../core/custom-types";
import business from "../services/authentication.application";
import { useNavigate } from "react-router-dom";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
    const navigate = useNavigate();
    const [userState, setUserState] = useState<AuthenticationState>(initialUserState);

    const logIn = (login: string, password: string) => {
        business.logIn({ login, password})
                .then(user => {
                    setUserState({
                        user: {email: user.email, userName: user.userName, token: user.token},
                        status: 'logged'
                    });
                    navigate('/');
                })
    }

    const logOut = () => {
        setUserState({
            user: null,
            status: 'logout'
        })
    }

    const newContext: AuthenticationStateWithLogin = {
        user: userState,
        logIn,
        logOut
    }

    return (
        <AuthenticationContext.Provider value={newContext}>
            {props.children}
        </AuthenticationContext.Provider>
    )
};