import client from '@/utils/axios';

const CommentAPI = {
  create: async (slug, comment) => {
    try {
      const response = await client.post(`/articles/${slug}/comments`, comment);
      return response.data;
    } catch (error: any) {
      return error.respnose;
    }
  },
  delete: async (slug, commentId) => {
    try {
      const response = await client.delete(
        `/articles/${slug}/comments/${commentId}`,
      );
      return response.data;
    } catch (error: any) {
      error.response;
    }
  },
  forArticle: async slug => {
    const response = await client.get(`/articles/${slug}/comments`);
    return response.data;
  },
};

export default CommentAPI;
