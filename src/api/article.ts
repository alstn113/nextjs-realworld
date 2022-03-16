import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const ArticleAPI = {
  getAll: async (query: any) => {
    const response = await clientPrivate.get(`/articles`, { params: query });
    return response.data;
  },
  getByAuthor: async (author: string) => {
    const response = await client.get(`/articles?author=${author}`);
    return response.data;
  },
  getByTag: async (tag: string) => {
    const response = await client.get(`/articles?tag=${tag}`);
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
  create: async article => {
    const response = await clientPrivate.post(`/articles`, article);
    return response.data;
  },
  update: async article => {
    const response = await clientPrivate.put(
      `/articles/${article.slug}`,
      article,
    );
    return response.data;
  },
  favorite: async (slug: string) => {
    const response = await client.post(`/articles/${slug}/favorite`);
    return response.data;
  },
  unfavorite: async (slug: string) => {
    const response = await client.delete(`/articles/${slug}/favorite`);
    return response.data;
  },
  favoriteBy: async (author: string) => {
    const response = await client.get(`/articles?favorited=${author}`);
    return response.data;
  },
  feed: async () => {
    const response = await client.get(`/articles/feed`);
    return response.data;
  },
};

export default ArticleAPI;
