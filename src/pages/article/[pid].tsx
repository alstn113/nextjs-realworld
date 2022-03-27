import ArticleAPI from '@/api/article';
import ArticleMeta from '@/components/article/ArticleMeta';
import CommentList from '@/components/comment/CommentList';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const ArticlePage = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, error, isLoading } = useQuery(['useGetArticle', pid], () =>
    ArticleAPI.get(pid),
  );

  return (
    <Styld>
      {!isLoading && (
        <>
          <div>title : {data.article.title}</div>
          <ArticleMeta article={data.article} />
          <div>description : {data.article.description}</div>
          <div>body : {data.article.body}</div>
          <div>tag-list</div>
          {data.article.tagList.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
          <div>
            <CommentList />
          </div>
        </>
      )}
    </Styld>
  );
};

const Styld = styled('div')`
  background: gray;
  color: white;
  padding: 1rem;
`;

export default ArticlePage;
