import UserAPI from '@/api/user';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Image from 'next/image';
import ProfileTab from '@/components/profile/ProfileTab';
import ArticleList from '@/components/article/ArticleList';
import styled from '@emotion/styled';

const Profile = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, isLoading } = useQuery(['profile', pid], () =>
    UserAPI.get(pid),
  );

  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      <UserInfo>
        <div>
          <Image
            src={data?.profile.image}
            alt="프로필"
            width={100}
            height={100}
          />
        </div>
        <p>{data?.profile.username}</p>
      </UserInfo>
      <div>
        <ArticleWrapper>
          <ProfileTab profile={data.profile} />
          <ArticleList />
        </ArticleWrapper>
      </div>
    </Container>
  );
};

const Container = styled('div')``;
const UserInfo = styled('div')`
  text-align: center;
  background: #f3f3f3;
  padding: 2rem 0 1rem;
  p {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const ArticleWrapper = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
`;

export default Profile;
