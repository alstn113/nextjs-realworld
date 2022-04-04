import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
}

const Button = ({
  onClick,
  type = 'button',
  children,
  size = 'medium',
}: ButtonProps) => {
  return <Container {...{ onClick, type, size }}>{children}</Container>;
};

const Container = styled('button')<{ size: string }>`
  ${({ theme, size }) =>
    size === 'small' ? theme.borderRadius.small : theme.borderRadius.medium};
  padding: ${({ size }) => (size === 'small' ? '0.5rem 1rem' : ' 1.5rem 3rem')};
  width: ${({ size }) => size === 'large' && '90%'};
  border: none;
  border-radius: 4px;
  color: #12b886;
  outline: none;
  &:hover {
    background: #12b886;
    color: #fff;
  }
`;

export default Button;
