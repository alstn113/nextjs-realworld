import client from '@/utils/axios';

interface SigninReqeust {
  email: string;
  password: string;
}

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export const signin = async (data: SigninReqeust) => {
  try {
    const response = await client.post('/users/login', {
      user: data,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const signup = async (data: SignupRequest) => {
  try {
    const response = await client.post('/users', {
      user: data,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
