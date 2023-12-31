import { AuthenticationUser, LoginUser } from "../models";

const url = 'https://localhost:7025/api/login';

type ApiReturnType = {
    surname: string,
    token: string
}

async function postRawApi(user: LoginUser): Promise<ApiReturnType> {
    const response = await fetch(url);
    const result = await response.json() as ApiReturnType;
    return result;
}

export async function postLogInByApi(user: LoginUser): Promise<AuthenticationUser> {
    return postRawApi(user);
}

export async function fakePostLogInByApi(user: LoginUser): Promise<AuthenticationUser> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                surname: 'Legolas',
                token: '123456789'
            })        
        }, 1000);
    })
}