import CommentAPI from '@/api/comment';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import CommentInput from '@/components/comment/CommentInput';
import Comment from '@/components/comment/Comment';
import { IComment } from '@/types/comment.type';

const CommentList = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, isLoading, error } = useQuery(['ArticleComment', pid], () =>
    CommentAPI.forArticle(pid),
  );
  return (
    <Styled>
      <CommentInput />
      {!isLoading && (
        <>
          {data.comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </Styled>
  );
};

const Styled = styled('div')`
  background: purple;
  color: white;
  padding: 1rem;
`;

export default CommentList;
