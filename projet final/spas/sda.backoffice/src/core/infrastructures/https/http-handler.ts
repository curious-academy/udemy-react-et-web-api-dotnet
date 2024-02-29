import axios from "axios";
import { getUserFromLocalDb } from "../../../features/authentication/services/localStorage.infrastructure";

// TODO: use environment variable
const BASE_URL = 'https://localhost:7025/';

const handler = axios.create({
    baseURL: BASE_URL,
});

handler.interceptors.request.use(config => {
    const user = getUserFromLocalDb();

    if (user && user.token) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
    }

    return config;
});

export default handler;