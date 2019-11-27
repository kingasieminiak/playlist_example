import ApiService from './ApiService';

const apiUrl = process.env.NODE_URL;
const apiKey = process.env.API_KEY;
export const apiService = new ApiService(apiUrl, apiKey);
