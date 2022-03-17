import UserAPI from '@/api/user';
import { useState } from 'react';

//emotion
import styled from '@emotion/styled';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

interface IForminputs {
  username: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('필수 항목'),
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

const RegisterForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();
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
      const { data, status } = await UserAPI.signup(input);
      if (status !== 200 && data?.errors) {
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
        <div>USERNAME</div>
        <input {...register('username')} />
        <p>{errors.username?.message}</p>
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

export default RegisterForm;
