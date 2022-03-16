import client from '@/utils/axios';

const TagAPI = {
  getAllTags: async () => {
    const response = await client.get(`/tags`);
    return response.data;
  },
};

export default TagAPI;
