import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';

const CommentAPI = {
  create: async (slug, comment) => {
    try {
      const { data } = await client.post(`/articles/${slug}/comments`, comment);
      return data;
    } catch (error: any) {
      return error.respnose;
    }
  },
  delete: async (slug, commentId) => {
    try {
      const { data } = await client.delete(
        `/articles/${slug}/comments/${commentId}`,
      );
      return data;
    } catch (error: any) {
      error.response;
    }
  },
  forArticle: async slug => {
    const { data } = await clientPrivate.get(`/articles/${slug}/comments`);
    return data;
  },
};

export default CommentAPI;
