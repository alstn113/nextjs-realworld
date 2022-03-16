import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const ArticleAPI = {
  getAll: async (query: any) => {
    const response = await clientPrivate.get(`/articles`, { params: query });
    return response.data;
  },
  getByAuthor: async (author: string) => {
    const response = await client.get(
      `/articles?author=${encodeURIComponent(author)}`,
    );
    return response.data;
  },
  getByTag: async (tag: string) => {
    const response = await client.get(
      `/articles?tag=${encodeURIComponent(tag)}`,
    );
    return response.data;
  },
  get: async (slug: string) => {
    const response = await client.get(`/articles/${slug}`);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await clientPrivate.delete(`/articles/${id}`);
    return response.data;
  },
};

export default ArticleAPI;
