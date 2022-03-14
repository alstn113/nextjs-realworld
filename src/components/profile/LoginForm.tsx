//emotion
import styled from '@emotion/styled';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '@/api/user';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (input: IForminputs) => {
    try {
      const { data, status } = await login(input.email, input.password);

      if (status !== 200) {
        setError(data.errors);
      }

      if (data?.user) {
        window.localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
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
