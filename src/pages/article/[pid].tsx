import ArticleAPI from '@/api/article';
import ArticleMeta from '@/components/article/ArticleMeta';
import CommentList from '@/components/comment/CommentList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const ArticlePage = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, isLoading } = useQuery(['useGetArticle', pid], () =>
    ArticleAPI.get(pid),
  );

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Banner>
            <Container>
              <h1>{data.article.title}</h1>
              <ArticleMeta article={data.article} />
            </Container>
          </Banner>
          <Container>
            <Body>{data.article.body}</Body>
            <div>tag-list</div>
            {data.article.tagList.map((tag: string) => (
              <li key={tag}>{tag}</li>
            ))}
            <div>
              <CommentList />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

const Banner = styled('div')`
  padding: 2rem 0;
  color: #fff;
  background: #333;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const Container = styled('div')`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Body = styled('div')`
  margin-bottom: 2rem;
`;

export default ArticlePage;
