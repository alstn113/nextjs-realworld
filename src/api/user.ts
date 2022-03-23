import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const UserAPI = {
  current: async () => {
    try {
      const { data } = await clientPrivate.get('/user');
      return data;
    } catch (error: any) {
      return error.response;
    }
  },
  signin: async body => {
    try {
      const { data } = await client.post('/users/login', {
        user: body,
      });
      return data;
    } catch (error: any) {
      return error.response;
    }
  },
  signup: async body => {
    try {
      const { data } = await client.post('/users', {
        user: body,
      });
      return data;
    } catch (error: any) {
      return error.response;
    }
  },
  save: async user => {
    try {
      const { data } = await client.put(`/user`, { user });
      return data;
    } catch (error: any) {
      return error.response;
    }
  },
  follow: async username => {
    const { data } = await clientPrivate.post(`/profiles/${username}/follow`);
    return data;
  },
  unfollow: async username => {
    const { data } = await clientPrivate.delete(`/profiles/${username}/follow`);
    return data;
  },
  get: async username => {
    const { data } = await client.get(`/profiles/${username}`);
    return data;
  },
};

export default UserAPI;
