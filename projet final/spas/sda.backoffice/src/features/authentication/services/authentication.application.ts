import { PostOneUser } from "../custom-types";
import { AuthenticationUser, LoginUser } from "../models";
import { postLogInByApi } from "./authentication.infrastructure";
import { saveUserInLocalDb } from "./localStorage.infrastructure";

/**
 * Login user to database (api)
 * @param api Api to get raw user
 */
async function logInUser(user: LoginUser, api: PostOneUser): Promise<AuthenticationUser> {
    const result = await api(user);

    // TODO: save in localStorage
    saveUserInLocalDb(result);

    return result;
}

export function factoryLogInUserBusiness(user: LoginUser): Promise<AuthenticationUser> {
    return logInUser(user, postLogInByApi);
}

const business = {
    logIn: factoryLogInUserBusiness
}

export default business;