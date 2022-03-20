import { IArticle } from '@/types/article.type';
import styled from '@emotion/styled';

interface Pageprops {
  article: IArticle;
}

const ArticlePreview = ({ article }: Pageprops) => {
  if (!article) return <div>not exists</div>;

  return (
    <Wrapper>
      <ArticleMeta>
        <img src={article.author.image} alt="author's profile image" />
        <Info>
          <div>{article.author.username}</div>
          <span>{new Date(article.createdAt).toDateString()}</span>
        </Info>
        <div>추천 : {article.favoritesCount}</div>
      </ArticleMeta>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <TagList>
        {article.tagList.map((tag, index) => {
          return (
            <li key={index}>
              <span>{tag}</span>
            </li>
          );
        })}
      </TagList>
    </Wrapper>
  );
};
const Wrapper = styled('div')`
  padding: 1.5rem 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 3px;
  }
  p {
    margin: 1rem 0 1rem 1rem;

    color: #999;
  }
`;

const ArticleMeta = styled('div')`
  margin-bottom: 1rem;
  display: flex;
  font-weight: 300;
  img {
    height: 32px;
    width: 32px;
    border-radius: 30px;
  }
`;

const Info = styled('div')`
  display: inline-block;
  span {
    font-size: 0.5rem;
    font-weight: 300;
    color: #bbbbbb;
  }
  margin: 0 1.5rem 0 1rem;
`;

const TagList = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  li {
    list-style-type: none;
    margin-right: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    padding: 0.5rem;
    color: #aaa;
    background: none;
  }
`;
export default ArticlePreview;
