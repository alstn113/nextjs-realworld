import styled from '@emotion/styled';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Container>
      <Content>{message}</Content>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  justify-content: center;
`;

const Content = styled('div')`
  display: inline-block;
  margin: 20px auto;
  border-radius: 4px;
  padding: 8px 15px;
  color: #f02d2d;
  font-weight: 600;
  background-color: rgba(240, 45, 45, 0.1);
`;
export default ErrorMessage;
