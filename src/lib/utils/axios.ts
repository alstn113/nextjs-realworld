import axios from 'axios';
import { SERVER_BASE_URL } from '@/lib/utils/constant';

const client = axios.create({
  baseURL: SERVER_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
