import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

const CommentInput = () => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const queryClient = useQueryClient();

  const [content, setContent] = useState<string>('');

  const handleChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  if (!isLoggedIn) {
    return (
      <p>
        <Link href="/user/login" as="/user/login">
          Sign in
        </Link>
        &nbsp;or&nbsp;
        <Link href="/user/register" as="/user/register">
          sign up
        </Link>
        &nbsp;to add comments on this article.
      </p>
    );
  }
  return (
    <Card onSubmit={handleSubmit}>
      <CardBlock>
        <textarea
          rows={3}
          placeholder="Write a comment..."
          value={content}
          onChange={handleChange}
        />
      </CardBlock>
      <CardFooter>
        <Image
          src={currentUser?.image}
          alt="Comment author's profile image"
          height={32}
          width={32}
        />
        <Button type="submit">Post Comment</Button>
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
  textarea {
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

const Button = styled('button')`
  float: right;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
`;

export default CommentInput;
