import styled from '@emotion/styled';

//react-hook-form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IForminputs {
  title: string;
  description: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required('필수항목'),
  description: yup.string().required('필수 항목'),
  body: yup.string().required('필수 항목'),
});

const PublishArticleEditor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: IForminputs) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>title</div>
        <input {...register('title')} />
        <p>{errors.title?.message}</p>
        <div>description</div>
        <input {...register('description')} />
        <p>{errors.description?.message}</p>
        <div>body</div>
        <input {...register('body')} />
        <p>{errors.body?.message}</p>
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

const Container = styled('div')`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Form = styled('form')`
  input {
    border: 1px solid black;
  }
`;

export default PublishArticleEditor;
