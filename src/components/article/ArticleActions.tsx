import { IArticle } from '@/types/article.type';
import styled from '@emotion/styled';

interface PageProps {
  article: IArticle;
}

const ArticleActions = ({ article }: PageProps) => {
  return (
    <Styled>
      <div>Actions</div>
    </Styled>
  );
};

const Styled = styled('div')`
  background: blue;
  color: white;
  padding: 1rem;
`;

export default ArticleActions;
