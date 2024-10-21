import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;