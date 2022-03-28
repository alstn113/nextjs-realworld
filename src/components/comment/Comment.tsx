import { IComment } from '@/interfaces/comment.interface';
import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';
import DeleteButton from '@/components/comment/DeleteButton';

interface PageProps {
  comment: IComment;
}

const Comment = ({ comment }: PageProps) => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const canModify =
    isLoggedIn && currentUser?.username === comment?.author?.username;
  return (
    <Card>
      <CardBlock>
        <p className="card-text">{comment.body}</p>
      </CardBlock>
      <CardFooter>
        <Link href="/profile/[pid]" as={`/profile/${comment.author.username}`}>
          <a>
            <Image
              src={comment.author.image}
              alt="Comment author's profile image"
              height={32}
              width={32}
            />
          </a>
        </Link>
        &nbsp;
        <Link href="/profile/[pid]" as={`/profile/${comment.author.username}`}>
          <a>{comment.author.username}</a>
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        {canModify && <DeleteButton commentId={comment.id} />}
      </CardFooter>
    </Card>
  );
};

const Card = styled('div')`
  margin-bottom: 0.75rem;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #e5e5e5;
`;

const CardBlock = styled('div')`
  p {
    width: 100%;
    font-size: 1rem;
    line-height: 1.25;
    background-color: #fff;
    border-radius: 0.25rem;
    border: 0;
    padding: 1.25rem;
    outline: none;
  }
`;

const CardFooter = styled('div')`
  border-top: 1px solid #e5e5e5;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  img {
    border-radius: 50%;
  }
`;

export default Comment;
