import axios from 'axios';
import { SERVER_BASE_URL } from '@/utils/constant';

const client = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
