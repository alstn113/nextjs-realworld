import clientPrivate from '@/utils/axiosPrivate';

const TagAPI = {
  getAllTags: async () => {
    const { data } = await clientPrivate.get(`/tags`);
    return data;
  },
};

export default TagAPI;
