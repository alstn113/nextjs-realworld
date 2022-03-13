import Banner from '@/components/home/Banner';
import { getAllArticle } from '@/lib/api/article';
import { useQuery } from 'react-query';

const Home = () => {
  const { data, isLoading, error } = useQuery('useGetArticle', getAllArticle);
  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <Banner />
      Home
      <div>
        {data?.articles?.map(article => (
          <div key={article.slug}>{article?.slug}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
