import client from '@/utils/axios';
import { useQuery } from 'react-query';

export const getAllTags = async () => {
  const { data } = await client.get(`/tags`);
  return data;
};
