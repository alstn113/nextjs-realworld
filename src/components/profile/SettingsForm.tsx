import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import Router from 'next/router';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UserAPI from '@/api/user';
import styled from '@emotion/styled';

interface IForminputs {
  image: string;
  username: string;
  bio: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  image: yup.string().required('필수항목'),
  username: yup.string().required('필수 항목'),
  bio: yup.string(),
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

const SettingsForm = () => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const queryClient = useQueryClient();
  //TODO: 여기 settings에 놓고 새로고침하면 isLoggedIn 작동 안해서 이거 고쳐야 할듯 redux 써서
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      image: currentUser?.image || '',
      username: currentUser?.username || '',
      bio: currentUser?.bio || '',
      email: currentUser?.email || '',
      password: '',
    },
  });

  const mutation = useMutation(
    'update',
    (body: IForminputs) => UserAPI.update(body),
    {
      onSuccess: async data => {
        window.localStorage.setItem('user', JSON.stringify(data.user));
        await queryClient.setQueryData('user', data.user);
        Router.push('/');
      },
    },
  );

  const onSubmit = async (data: IForminputs) => {
    mutation.mutate(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="URL of profile picture"
              {...register('image')}
            />
            <p>{errors.image?.message}</p>
          </fieldset>
          <fieldset>
            <input
              {...register('username')}
              type="text"
              placeholder="Username"
            />
            <p>{errors.username?.message}</p>
          </fieldset>

          <fieldset>
            <textarea
              {...register('bio')}
              rows={8}
              placeholder="Short bio about you"
            />
            <p>{errors.bio?.message}</p>
          </fieldset>

          <fieldset>
            <input {...register('email')} type="email" placeholder="Email" />
            <p>{errors.email?.message}</p>
          </fieldset>

          <fieldset>
            <input
              {...register('password')}
              type="password"
              placeholder="New Password"
            />
            <p>{errors.password?.message}</p>
          </fieldset>

          <Button type="submit">Update Settings</Button>
        </fieldset>
      </Form>
    </Container>
  );
};

const Container = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  fieldset {
    margin-bottom: 1rem;
  }
`;

const Form = styled('form')`
  input,
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    background-color: #fff;
    width: 100%;
    padding: 0.5rem 0.75rem;
    line-height: 1.25;
  }
`;

const Button = styled('button')`
  border-radius: 0.25rem;
  border: 1px solid black;
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
`;

export default SettingsForm;
