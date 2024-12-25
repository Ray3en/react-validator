import axios, { InternalAxiosRequestConfig } from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL || 'https://fastapi-cors-proxy-1.onrender.com/api'

export const instance = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);