import client from '@/utils/axios';

export const getAllArticle = async () => {
  const { data } = await client.get(`/articles`);
  return data;
};

export const getArticleByAuhor = async () => {
  const { data } = await client.get(`/articles?author=abc`);
  return data;
};

export const getArticleByTag = async () => {
  const { data } = await client.get(`/articles?tag=abc`);
  return data;
};
