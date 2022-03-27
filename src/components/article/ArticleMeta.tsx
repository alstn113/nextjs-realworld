import { IArticle } from '@/types/article.type';
import styled from '@emotion/styled';
import Image from 'next/image';
import ArticleActions from '@/components/article/ArticleActions';

interface PageProps {
  article: IArticle;
}

const ArticleMeta = ({ article }: PageProps) => {
  return (
    <Styled>
      <Image src={article.author.image} alt="" height={50} width={50} />
      <div>{article.author.username}</div>
      <div>{article.createdAt}</div>

      <ArticleActions article={article} />
    </Styled>
  );
};

const Styled = styled('div')`
  background: red;
  color: white;
  padding: 1rem;
`;

export default ArticleMeta;
