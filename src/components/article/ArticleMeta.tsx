import { IArticle } from '@/types/article.type';
import styled from '@emotion/styled';
import Image from 'next/image';
import ArticleActions from '@/components/article/ArticleActions';

interface PageProps {
  article: IArticle;
}

const ArticleMeta = ({ article }: PageProps) => {
  return (
    <Container>
      <Image
        src={article.author.image}
        alt="profile image"
        height={50}
        width={50}
      />
      <Info>
        <div>{article.author.username}</div>
        <span>{new Date(article.createdAt).toDateString()}</span>
      </Info>
      <ArticleActions article={article} />
    </Container>
  );
};

const Container = styled('div')`
  margin-top: 2rem;
  display: flex;
  img {
    border-radius: 50%;
  }
`;

const Info = styled('div')`
  margin-left: 1rem;
  margin-right: 1rem;
`;
export default ArticleMeta;
