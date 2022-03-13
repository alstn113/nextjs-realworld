import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
