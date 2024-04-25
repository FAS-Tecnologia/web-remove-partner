import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { z as zod } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { api } from '../../lib/api';

import {
  SignInButton,
  SignInContainer,
  SignInContent,
  SignInForm,
  SignInInputContainer,
  SignInTitle,
  Title,
} from './styles';

type IPartner = {
  id: string;
};

type ISessionResponse = {
  partner: IPartner;
};

const signInValidationSchema = zod.object({
  email: zod.string().email().min(1),
  password: zod.string().min(1),
});

type ISignInData = zod.infer<typeof signInValidationSchema>;

export const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInData>({
    resolver: zodResolver(signInValidationSchema),
  });

  const { mutateAsync: handleSignIn, isPending: isLoadingSingIn } = useMutation(
    {
      mutationFn: async (data: ISignInData) => {
        const response = await api.post('/sessions/partner', data);

        return response.data as ISessionResponse;
      },
      onSuccess: async (partnerData) => {
        const partnerId = partnerData.partner.id;

        navigate(`/remover?partnerId=${partnerId}`);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            console.log(error.response.data);
          }
        }
      },
    },
  );

  const handleSubmitSignIn = (data: ISignInData) => {
    handleSignIn(data);
  };

  return (
    <SignInContainer>
      <SignInContent>
        <Title>Parceiros - FAS Tecnologia</Title>

        <SignInForm onSubmit={handleSubmit(handleSubmitSignIn)}>
          <SignInTitle>Faça o login</SignInTitle>

          <SignInInputContainer isError={!!errors.email}>
            <input type="email" placeholder="E-mail" {...register('email')} />
          </SignInInputContainer>

          <SignInInputContainer isError={!!errors.password}>
            <input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
          </SignInInputContainer>

          <SignInButton type="submit" disabled={isLoadingSingIn}>
            Entrar
          </SignInButton>
        </SignInForm>
      </SignInContent>
    </SignInContainer>
  );
};
