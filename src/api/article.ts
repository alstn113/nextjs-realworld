import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

export const getAllArticles = async () => {
  const { data } = await clientPrivate.get(`/articles`);
  return data;
};

export const getArticlesByAuhor = async () => {
  const { data } = await client.get(`/articles?author=abc`);
  return data;
};

export const getArticlesByTag = async () => {
  const { data } = await client.get(`/articles?tag=abc`);
  return data;
};
