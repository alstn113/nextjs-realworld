import axios from 'axios';
import { SERVER_BASE_URL } from '@/utils/constant';

const options = () => {
  if (typeof window === 'undefined') return {};

  if (!window.localStorage.user) return {};

  if (Object.keys(window.localStorage.user).length === 0) return {};

  const user = JSON.parse(window.localStorage.user);

  if (!!user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    };
  }
};

const clientPrivate = axios.create({
  baseURL: SERVER_BASE_URL,
  ...options(),
});

export default clientPrivate;
