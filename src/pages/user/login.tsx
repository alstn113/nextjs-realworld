import LoginForm from '@/components/profile/LoginForm';
import styled from '@emotion/styled';

const Login = () => {
  return (
    <Container>
      <h1>Sign in</h1>
      <p>Need an account?</p>
      <LoginForm />
    </Container>
  );
};

const Container = styled('div')`
  max-width: 1024px;
  margin: 1.5rem auto 0;
  padding: 0 1rem;
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.1;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #5cb85c;
  }
`;

export default Login;
