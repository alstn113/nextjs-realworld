//emotion
import styled from '@emotion/styled';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IForminputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('필수항목'),
  password: yup.string().required('필수 항목'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: IForminputs) => {
    console.log(data);
  };

  return (
    <div>
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
