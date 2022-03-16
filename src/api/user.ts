import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const UserAPI = {
  current: async () => {
    try {
      const response = await clientPrivate.get('/user');
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  signin: async body => {
    try {
      const response = await client.post('/users/login', {
        user: body,
      });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  },
  signup: async body => {
    try {
      const response = await client.post('/users', {
        user: body,
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
    return response.data;
  },
};

export default UserAPI;
