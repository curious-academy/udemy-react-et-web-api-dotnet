export interface User {
    surname: string;
    email: string;
}

export interface LoginUser {
    login: string;
    password: string;
}

export interface AuthenticationUser extends User {
    token ?: string;
}