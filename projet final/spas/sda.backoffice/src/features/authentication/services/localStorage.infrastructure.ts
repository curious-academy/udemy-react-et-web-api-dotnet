import { AuthenticationUser } from "../models";

/**
 * Saves in local storage
 * @param user 
 */
export function saveUserInLocalDb(user: AuthenticationUser): void {
    localStorage.setItem('authenticationUser', JSON.stringify(user));
}

export function getUserFromLocalDb(): AuthenticationUser | null {
    const fromStorageUser = localStorage.getItem('authenticationUser');
    let user: AuthenticationUser | null = null;

    if (fromStorageUser) {
        user = JSON.parse(fromStorageUser) as AuthenticationUser;
    }

    return user;
}