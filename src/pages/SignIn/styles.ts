import styled, { css } from 'styled-components';

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors['gray-700']};
`;

export const SignInContent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 20px;
`;

export const SignInForm = styled.form`
  width: 50rem;
  /* height: 30rem; */

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors['gray-700']};

  padding: 2rem;
`;

export const SignInTitle = styled.h1`
  font-size: 3rem;

  margin-bottom: 3rem;
`;

interface ISignInInputContainerProps {
  isError?: boolean;
}

export const SignInInputContainer = styled.div<ISignInInputContainerProps>`
  width: 100%;
  height: 4rem;

  padding: 5px;

  border: ${({ theme }) => `1px solid ${theme.colors['gray-600']}`};

  border-radius: 5px;

  & + div {
    margin-top: 8px;
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${({ theme }) => theme.colors['red-500']};
    `}

  input {
    width: 100%;
    height: 100%;

    border: none;

    font-size: 1.875rem;
    color: ${({ theme }) => theme.colors['gray-700']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-400']};
    }
  }
`;

export const SignInButton = styled.button`
  all: unset;

  width: 100%;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors['green-500']};

  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};

  margin-top: 1rem;

  border-radius: 5px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
