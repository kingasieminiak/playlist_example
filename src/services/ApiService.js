import axios from 'axios';

class ApiService {
  constructor(apiURL) {
    this.apiURL = apiURL;
  }

  setAuthData(token) {
    this.token = token;
    this.authHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

  post(url, data = {}, headers, action = null) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.apiURL}${url}`, JSON.stringify(data), { headers: headers || this.authHeader })
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
