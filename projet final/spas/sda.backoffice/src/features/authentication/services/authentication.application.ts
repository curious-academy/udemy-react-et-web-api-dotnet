import { PostOneUser } from "../custom-types";
import { AuthenticationUser, LoginUser } from "../models";
import { fakePostLogInByApi } from "./authentication.infrastructure";

/**
 * Login user to database (api)
 * @param api Api to get raw user
 */
async function logInUser(user: LoginUser, api: PostOneUser): Promise<AuthenticationUser> {
    let result = await api(user);

    // TODO: save in localStorage

    return result;
}

export function factoryLogInUserBusiness(user: LoginUser): Promise<AuthenticationUser> {
    return logInUser(user, fakePostLogInByApi);
}

const business = {
    logIn: factoryLogInUserBusiness
}

export default business;