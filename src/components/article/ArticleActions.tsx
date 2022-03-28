import ArticleAPI from '@/api/article';
import { IArticle } from '@/interfaces/article.interface';
import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

interface PageProps {
  article: IArticle;
}

const ArticleActions = ({ article }: PageProps) => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const canModify =
    isLoggedIn && currentUser?.username === article?.author?.username;

  const handleDelete = () => {
    mutation.mutate();
  };

  const mutation = useMutation('deleteArticle', () => ArticleAPI.delete(pid), {
    onSuccess: () => {
      router.push('/');
    },
  });

  return (
    canModify && (
      <span>
        <Button>
          <Link href={'/editor/[pid]'} as={`/editor/${article.slug}`}>
            <a>Edit Article</a>
          </Link>
        </Button>
        <Button onClick={handleDelete}>Delete Article</Button>
      </span>
    )
  );
};

const Button = styled('button')`
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  color: gray;
  border: 1px solid gray;
  & + & {
    margin-left: 1rem;
  }
  a {
    color: gray;
    text-decoration: none;
  }
`;

export default ArticleActions;
