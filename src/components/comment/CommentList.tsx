import CommentAPI from '@/api/comment';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import CommentInput from '@/components/comment/CommentInput';
import Comment from '@/components/comment/Comment';
import { IComment } from '@/types/comment.type';
import LoadingSpinner from '../common/LoadingSpinner';

const CommentList = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, isLoading } = useQuery(['ArticleComment', pid], () =>
    CommentAPI.forArticle(pid),
  );
  return (
    <Container>
      <hr />
      <CommentInput />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {data.comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </Container>
  );
};

const Container = styled('div')`
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default CommentList;
