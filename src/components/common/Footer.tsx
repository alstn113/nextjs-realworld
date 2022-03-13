import Link from 'next/link';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Link href={`/`}>
          <a>conduit</a>
        </Link>
        <span>
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </Container>
    </footer>
  );
};

const Container = styled('div')``;

export default Footer;
