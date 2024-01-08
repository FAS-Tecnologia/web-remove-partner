import styled from 'styled-components';

export const LoadingContainer = styled.div``;

export const LoadingSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;

  border: ${({ theme }) => `2px solid ${theme.colors['green-500']}`};
  border-top: ${({ theme }) => `2px solid ${theme.colors['green-300']}`};
  border-radius: 50%;

  animation: spinner 1.5s linear infinite;
`;
