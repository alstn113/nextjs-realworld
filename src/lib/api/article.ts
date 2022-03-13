import axios from 'axios';
import { SERVER_BASE_URL } from '../utils/constant';

export const getAllArticle = async () => {
  const { data } = await axios.get(`${SERVER_BASE_URL}/articles`);
  return data;
};

export const getArticleByAuhor = async () => {
  const { data } = await axios.get(`${SERVER_BASE_URL}/articles?author=abc`);
  return data;
};

export const getArticleByTag = async () => {
  const { data } = await axios.get(`${SERVER_BASE_URL}/articles?tag=abc`);
  return data;
};
