import styled from '@emotion/styled';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Container>
        <Link href={`/`}>
          <a>CONDUIT</a>
        </Link>
        <Navbar>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
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
        </Navbar>
      </Container>
    </header>
  );
};

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Navbar = styled('ul')`
  display: flex;
`;

export default Header;
