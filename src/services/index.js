import ApiService from './ApiService';

const apiUrl = process.env.NODE_URL;
export const apiService = new ApiService(apiUrl);
