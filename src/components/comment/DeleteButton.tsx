import CommentAPI from '@/api/comment';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';

interface PageProps {
  commentId: string;
}

const DeleteButton = ({ commentId }: PageProps) => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;
  const queryClient = useQueryClient();

  const mutation = useMutation(
    'deleteComment',
    () => CommentAPI.delete(pid, commentId),
    {
      onSuccess: async () => {
        queryClient.refetchQueries(['ArticleComment', pid]);
      },
    },
  );
  const handleDelete = () => {
    mutation.mutate();
  };

  return (
    <span>
      <button onClick={handleDelete}>X</button>
    </span>
  );
};

export default DeleteButton;
