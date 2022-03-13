import client from '@/lib/utils/axios';

export const getAllTags = async () => {
  const { data } = await client.get(`/tags`);
  return data;
};
