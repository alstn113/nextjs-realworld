import axios from 'axios';
import { SERVER_BASE_URL } from '../utils/constant';

export const getAllTags = async () => {
  const { data } = await axios.get(`${SERVER_BASE_URL}/tags`);
  return data;
};
