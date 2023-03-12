import Axios, {
  type InternalAxiosRequestConfig,
  type AxiosRequestConfig,
} from 'axios';

import { API_URL, API_TOKEN } from '~/config';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = API_TOKEN;
  config.headers = config.headers || {};
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  request.headers.setAuthorization(`Bearer ${API_TOKEN}`);
  return request;
});
