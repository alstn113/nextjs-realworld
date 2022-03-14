import { getAllArticle } from '@/api/article';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import LoadingSpinner from '../common/LoadingSpinner';

const ArticleList = () => {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const { favorite, follow, tag, id } = query;

  const { data, error, isLoading } = useQuery('useGetArticle', getAllArticle);
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <LoadingSpinner />;
  const { articles, articlesCount } = data;
  return (
    <div>
      {articles.map(article => (
        <div>{article.slug}</div>
      ))}
    </div>
  );
};

export default ArticleList;
