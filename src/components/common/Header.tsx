import styled from '@emotion/styled';
import Link from 'next/link';
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link href={`/`}>
            <a>CONDUIT</a>
          </Link>
        </Logo>
        <Navbar>
          <ul>
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
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
