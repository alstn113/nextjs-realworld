import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useQuery } from 'react-query';
import Maybe from './Maybe';

const Header = () => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link href={`/`}>
            <a>REALWORLD</a>
          </Link>
        </Logo>
        <Navbar>
          <ul>
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <Maybe test={isLoggedIn}>
              <li>
                <Link href={`/editor/new`}>
                  <a>New Post</a>
                </Link>
              </li>
              <li>
                <Link href={`/user/settings`}>
                  <a>Settings</a>
                </Link>
              </li>
              <li>
                <Link href={`/profile/${currentUser?.username}`}>
                  <a>{currentUser?.username}</a>
                </Link>
              </li>
            </Maybe>
            <Maybe test={!isLoggedIn}>
              <li>
                <Link href={`/user/login`}>
                  <a>Sign in</a>
                </Link>
              </li>
              <li>
                <Link href={`/user/register`}>
                  <a>Sign up</a>
                </Link>
              </li>
            </Maybe>
          </ul>
        </Navbar>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled('header')`
  padding: 0.5rem 1rem;
`;

const Container = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled('div')`
  a {
    color: #5cb85c;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 700;
  }
`;

const Navbar = styled('nav')`
  ul {
    display: flex;
    li {
      margin: 0 1rem;
      line-height: 1.5;
      a {
        text-decoration: none;
      }
    }
  }
`;

export default Header;
