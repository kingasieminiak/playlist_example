import axios from 'axios';

class ApiService {
  constructor(apiURL, apiKey) {
    this.apiURL = apiURL;
    this.apiKey = apiKey;

    this.authHeader = {
      'Content-Type': 'multipart/form-data',
    };
  }

  get(url) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.apiURL}${url}`, { headers: this.authHeader })
        .then(response => resolve(response.data))
        .catch((error) => {
          if (error.response && error.response.data.error) {
            return reject(error.response.data.error);
          }

          return reject(error.message);
        });
    });
  }

  post(url, payload = {}, headers, action = null) {
    const data = new FormData();
    Object.keys(payload).map(key => data.append(key, payload[key]));

    return new Promise((resolve, reject) => {
      axios.post(`${this.apiURL}${url}?apikey=${this.apiKey}`, data, { headers: headers || this.authHeader })
        .then((response) => {
          if (action) action(response.data);
          return resolve(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.data.error) {
            return reject(error.response.data.error);
          }

          return reject(error.message);
        });
    });
  }
}

export default ApiService;
