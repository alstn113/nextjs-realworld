import client from '@/utils/axios';

export const login = async (email, password) => {
  try {
    const response = await client.post('/users/login', {
      user: { email, password },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const register = async () => {
  const { data } = await client.get(`/articles`);
  return data;
};
