import Link from 'next/link';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link href={`/`}>
            <a>conduit</a>
          </Link>
        </Logo>
        <Text>
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </Text>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled('footer')`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  background: #f3f3f3;
`;
const Container = styled('div')`
  max-width: 576px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Logo = styled('div')`
  display: inline-block;
  a {
    font-size: 1rem;
    color: #5cb85c;
    text-decoration: none;
  }
`;

const Text = styled('span')`
  margin-left: 0.8rem;
  font-size: 0.5rem;
  color: #bbb;
  font-weight: 300;
  a {
    text-decoration: none;
  }
`;

export default Footer;
