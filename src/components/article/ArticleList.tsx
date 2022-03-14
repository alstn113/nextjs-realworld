import { getAllArticles } from '@/api/article';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import LoadingSpinner from '../common/LoadingSpinner';
import ArticlePreview from './ArticlePreview';

const ArticleList = () => {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const { favorite, follow, tag, id } = query;

  const { data, error, isLoading } = useQuery('useGetArticle', getAllArticles);
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <LoadingSpinner />;
  const { articles, articlesCount } = data;
  return (
    <div>
      {articles.map(article => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
