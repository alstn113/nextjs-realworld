import { useRouter } from 'next/router';
import { useState } from 'react';
import UserAPI from '@/api/user';

//emotion
import styled from '@emotion/styled';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';

interface IForminputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const mutation = useMutation(
    'signin',
    (body: IForminputs) => UserAPI.signin(body),
    {
      onSuccess: async data => {
        try {
          if (data.status !== 200) {
            setError(data.errors);
          }
          console.log(data);
          if (data?.data?.user) {
            window.localStorage.setItem('user', JSON.stringify(data.data.user));
            await queryClient.setQueryData('user', data.data.user);
            router.push('/');
          }
        } catch (error) {
          console.error(error);
        }
      },
    },
  );

  const onSubmit = async (data: IForminputs) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <div>{JSON.stringify(error)}</div>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>EAMIL</div>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <div>PASSWORD</div>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const Form = styled('form')`
  input {
    border: 1px solid black;
  }
`;

export default LoginForm;
