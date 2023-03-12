import Axios, { type InternalAxiosRequestConfig } from 'axios';

import { API_URL, API_TOKEN } from '~/config';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  request.headers.setAuthorization(`Bearer ${API_TOKEN}`);
  return request;
});
