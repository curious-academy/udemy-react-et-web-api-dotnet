import { AuthenticationUser, LoginUser } from "../models";

const url = 'https://localhost:7025/login';

type ApiReturnType = {
    surname: string,
    accessToken: string
}

async function postRawApi(user: LoginUser): Promise<ApiReturnType> {
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: user.login,
            password: user.password
        }),
      });
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