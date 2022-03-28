import ArticleAPI from '@/api/article';
import { IArticle } from '@/interfaces/article.interface';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import LoadingSpinner from '../common/LoadingSpinner';
import ArticlePreview from './ArticlePreview';

const ArticleList = () => {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const { favorite, follow, tag, pid } = query;

  const { data, isLoading } = useQuery(['useGetArticle', query], () =>
    ArticleAPI.getAll(query),
  );
  if (isLoading) return <LoadingSpinner />;
  const { articles } = data;
  return (
    <div>
      {articles.map((article: IArticle) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
