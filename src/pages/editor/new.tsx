import styled from '@emotion/styled';

import TagInput from '@/components/editor/TagInput';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  selectArticle,
  setBody,
  setDescription,
  setTitle,
} from '@/features/articleSlice';

const PublishArticleEditor = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectArticle);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(article);
  };

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

          <button type="button" onClick={handleSubmit}>
            Publish Article
          </button>
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
`;

const Form = styled('form')`
  input {
    border: 1px solid black;
  }
`;

export default PublishArticleEditor;
