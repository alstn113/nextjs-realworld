import client from '@/utils/axios';

const TagAPI = {
  getAllTags: async () => {
    const { data } = await client.get(`/tags`);
    return data;
  },
};

export default TagAPI;
