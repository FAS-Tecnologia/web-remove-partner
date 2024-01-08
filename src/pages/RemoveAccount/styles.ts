import styled from 'styled-components';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const RemoveAccountContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors['gray-700']};
`;

export const RemoveAccountContent = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveAccountForm = styled.form`
  width: 50rem;
  /* height: 30rem; */

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors['gray-700']};

  padding: 2rem;
`;

export const RemoveAccountTitle = styled.h1`
  font-size: 3rem;

  margin-bottom: 3rem;
`;

export const RemoveAccountText = styled.p`
  font-size: 1.375rem;
`;

export const RemoveAccountButton = styled.button`
  all: unset;

  width: 100%;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors['red-500']};

  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};

  margin-top: 3rem;

  border-radius: 5px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// DIALOG
export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const AlertDialogContent = styled(AlertDialog.Content)`
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 6px;

  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding: 25px;

  &:focus {
    outline: none;
  }
`;

export const AlertDialogTitle = styled(AlertDialog.Title)`
  margin: 0;

  font-size: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['gray-700']};
`;

export const AlertDialogDescription = styled(AlertDialog.Description)`
  margin: 20px 0;

  font-size: 15px;
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: 1.5;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

interface IAlertDialogButtonProps {
  destroy?: boolean;
}

export const AlertDialogButton = styled.button<IAlertDialogButtonProps>`
  all: unset;

  height: 35px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 4;

  padding: 0 15px;

  font-size: 15px;
  font-weight: 500;
  line-height: 1;

  cursor: pointer;

  background-color: ${({ theme, destroy }) =>
    destroy ? theme.colors['red-500'] : theme.colors['gray-900']};

  color: ${({ theme, destroy }) =>
    destroy ? theme.colors.white : theme.colors['gray-100']};

  &:hover {
    background-color: ${({ theme, destroy }) =>
      destroy ? theme.colors['red-300'] : theme.colors['gray-700']};
  }
`;
