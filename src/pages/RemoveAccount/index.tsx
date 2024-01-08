// import { api } from "../../lib/api"

import { useSearchParams, useNavigate } from 'react-router-dom';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { useMutation, useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { api } from '../../lib/api';

import {
  AlertDialogButton,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Flex,
  RemoveAccountButton,
  RemoveAccountContainer,
  RemoveAccountContent,
  RemoveAccountForm,
  RemoveAccountText,
  RemoveAccountTitle,
} from './styles';
import { Loading } from '../../components/LoadingSpinner';

type IPartner = {
  company_name: string;
  fantasy_name: string;
  cnpj: string;
};

export const RemoveAccountPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const partnerId = searchParams.get('partnerId');

  // USE QUERY
  const { data: partner, isLoading: isLoadingPartner } = useQuery<IPartner>({
    queryKey: ['partner', partnerId],
    queryFn: async () => {
      try {
        const response = await api.get(`partners/${partnerId}`);

        if (response.status === 200) {
          return response.data;
        }

        return null;
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            alert('Não foi possível');
          }
        }
      }
    },
  });
  // END USE QUERY

  //  USE MUTATION
  const {
    mutateAsync: handleRemoveAccount,
    isPending: isLoadingRemoveAccount,
  } = useMutation({
    mutationFn: async () => {
      await api.delete(`partners/${partnerId}`);
    },
    onSuccess: () => {
      alert('Conta excluída permanentemente');

      navigate('/');
    },
    onError: () => {
      alert('Não foi possível, sua conta. Tente novamente');
    },
  });
  // END USE MUTATION

  return (
    <RemoveAccountContainer>
      <RemoveAccountContent>
        {isLoadingPartner ? (
          <Loading />
        ) : (
          <RemoveAccountForm>
            <RemoveAccountTitle>Excluir conta</RemoveAccountTitle>

            {partner && (
              <>
                <RemoveAccountText>
                  Razão social: {partner.company_name}
                </RemoveAccountText>
                <RemoveAccountText>
                  Nome fantasia: {partner.fantasy_name}
                </RemoveAccountText>
                <RemoveAccountText>CNPJ: {partner.cnpj}</RemoveAccountText>
              </>
            )}

            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <RemoveAccountButton
                  type="button"
                  disabled={isLoadingRemoveAccount}
                >
                  Excluir definitivamente a conta
                </RemoveAccountButton>
              </AlertDialog.Trigger>

              <AlertDialog.Portal>
                <AlertDialogOverlay />
                <AlertDialogContent>
                  <AlertDialogTitle>
                    Você tem certeza absoluta?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação não pode ser desfeita. Isto irá permanentemente
                    excluir sua conta e remover seus dados dos servidores.
                  </AlertDialogDescription>

                  <Flex>
                    <AlertDialog.Cancel asChild>
                      <AlertDialogButton destroy>Cancelar</AlertDialogButton>
                    </AlertDialog.Cancel>

                    <AlertDialog.Action asChild>
                      <AlertDialogButton
                        type="button"
                        disabled={isLoadingRemoveAccount}
                        onClick={() => {
                          handleRemoveAccount();
                        }}
                      >
                        Sim, deletar conta
                      </AlertDialogButton>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialogContent>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </RemoveAccountForm>
        )}
      </RemoveAccountContent>
    </RemoveAccountContainer>
  );
};
