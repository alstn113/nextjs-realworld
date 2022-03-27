import { IComment } from '@/types/comment.type';
import styled from '@emotion/styled';

interface PageProps {
  comment: IComment;
}

const Comment = ({ comment }: PageProps) => {
  return (
    <Styled>
      <div>
        {comment.author.username} : {comment.body}
      </div>
    </Styled>
  );
};

const Styled = styled('div')`
  background: black;
  color: white;
  padding: 1rem;
`;

export default Comment;
