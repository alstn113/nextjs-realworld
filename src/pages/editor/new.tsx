import styled from '@emotion/styled';

import TagInput from '@/components/editor/TagInput';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  selectArticle,
  setBody,
  setDescription,
  setTitle,
} from '@/features/articleSlice';
import { useMutation } from 'react-query';
import ArticleAPI from '@/api/article';
import Router from 'next/router';

const PublishArticleEditor = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectArticle);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    mutation.mutate();
  };

  const mutation = useMutation(
    'postArticle',
    () => ArticleAPI.create({ article }),
    {
      onSuccess: () => {
        Router.push('/');
        return;
      },
    },
  );

  return (
    <Container>
      <Form>
        <fieldset>
          <fieldset>
            <input
              type="text"
              placeholder="Article Title"
              value={article.title}
              onChange={e => dispatch(setTitle(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <input
              type="text"
              placeholder="What's this article about?"
              value={article.description}
              onChange={e => dispatch(setDescription(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <textarea
              rows={8}
              placeholder="Write your article (in markdown)"
              value={article.body}
              onChange={e => dispatch(setBody(e.target.value))}
            />
          </fieldset>

          <TagInput />

          <Button type="button" onClick={handleSubmit}>
            Publish Article
          </Button>
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

export default PublishArticleEditor;
