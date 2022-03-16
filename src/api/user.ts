import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

interface SigninReqeust {
  email: string;
  password: string;
}

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

const UserAPI = {
  myInfo: async () => {
    try {
      const response = await clientPrivate.get('/user');
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  signin: async (data: SigninReqeust) => {
    try {
      const response = await client.post('/users/login', {
        user: data,
      });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  signup: async (data: SignupRequest) => {
    try {
      const response = await client.post('/users', {
        user: data,
      });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  save: async user => {
    try {
      const response = await client.put(`/user`, { user });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  follow: async username => {
    const response = await clientPrivate.post(`/profiles/${username}/follow`);
    return response.data;
  },
  unfollow: async username => {
    const response = await clientPrivate.delete(`/profiles/${username}/follow`);
    return response.data;
  },
  get: async username => {
    const response = await client.get(`/profiles/${username}`);
  },
};

export default UserAPI;
