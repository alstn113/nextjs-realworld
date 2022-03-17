import styled from '@emotion/styled';

const Banner = () => {
  return (
    <Container>
      <Logo>CLONE PROJECT</Logo>
      <Text>Learnning FRONTEND </Text>
    </Container>
  );
};

const Container = styled('div')`
  background: #5cb85c;
  padding: 2rem;
  margin-bottom: 2rem;
`;
const Logo = styled('h1')`
  font-size: 3.5rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding-bottom: 0.5rem;
`;
const Text = styled('p')`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

export default Banner;
