import TagAPI from '@/api/tag';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useQuery } from 'react-query';
import LoadingSpinner from '../common/LoadingSpinner';

const Tags = () => {
  const { data, error, isLoading } = useQuery('getAllTags', TagAPI.getAllTags);
  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <LoadingSpinner />;

  return (
    <List>
      {data.tags?.map(tag => (
        <Tag key={tag}>
          <Link href={`/?tag=${tag}`}>
            <a>{tag}</a>
          </Link>
        </Tag>
      ))}
    </List>
  );
};

const List = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
const Tag = styled('div')`
  color: #fff;
  font-size: 0.8rem;
  padding: 0.2rem 0.3rem;
  margin: 0.2rem 0.3rem;
  white-space: nowrap;
  border-radius: 1rem;
  border: 1px solid black;
  a {
    text-decoration: none;
  }
`;
export default Tags;
