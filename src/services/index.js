import ApiService from './ApiService';

const apiUrl = process.env.NODE_URL;
const apiKey = '___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8';
export const apiService = new ApiService(apiUrl, apiKey);
