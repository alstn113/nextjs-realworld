import { getAllTags } from '@/api/tag';
import Link from 'next/link';
import { useQuery } from 'react-query';
import LoadingSpinner from '../common/LoadingSpinner';

const Tags = () => {
  const { data, error, isLoading } = useQuery('getAllTags', getAllTags);
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      {data.tags?.map(tag => (
        <div key={tag}>
          <Link href={`/?tag=${tag}`}>
            <a>{tag}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tags;
