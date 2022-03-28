import { IArticleRequest } from '@/interfaces/article.interface';
import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const ArticleAPI = {
  getAll: async (query: any) => {
    const { data } = await clientPrivate.get(`/articles`, { params: query });
    return data;
  },
  getByAuthor: async (author: string) => {
    const { data } = await client.get(`/articles`, {
      params: { author },
    });
    return data;
  },
  getByTag: async (tag: string) => {
    const { data } = await client.get(`/articles`, {
      params: { tag },
    });
    return data;
  },
  get: async slug => {
    const { data } = await client.get(`/articles/${slug}`);
    return data;
  },
  delete: async (id: any) => {
    const { data } = await clientPrivate.delete(`/articles/${id}`);
    return data;
  },
  create: async (article: IArticleRequest) => {
    const { data } = await clientPrivate.post(`/articles`, article);
    return data;
  },
  update: async (slug: string, article: IArticleRequest) => {
    const { data } = await clientPrivate.put(`/articles/${slug}`, article);
    return data;
  },
  favorite: async (slug: string) => {
    const { data } = await client.post(`/articles/${slug}/favorite`);
    return data;
  },
  unfavorite: async (slug: string) => {
    const { data } = await client.delete(`/articles/${slug}/favorite`);
    return data;
  },
  favoriteBy: async (author: string) => {
    const { data } = await client.get(`/articles`, {
      params: { favorited: author },
    });
    return data;
  },
  feed: async () => {
    const { data } = await client.get(`/articles/feed`);
    return data;
  },
};

export default ArticleAPI;
