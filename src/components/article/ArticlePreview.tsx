import { IArticle } from '@/types/article.type';
import styled from '@emotion/styled';

interface Pageprops {
  article: IArticle;
}

const ArticlePreview = ({ article }: Pageprops) => {
  if (!article) return <div>not exists</div>;

  return (
    <Wrapper>
      <hr />
      <div>
        프로필 이미지
        <img src={article.author.image} alt="author's profile image" />
      </div>
      <div>날짜 : {new Date(article.createdAt).toDateString()}</div>
      <div>추천 수 : {article.favoritesCount}</div>
      <h1>제목 : {article.title}</h1>
      <p>설명 : {article.description}</p>
      <div>
        {article.tagList.map((tag, index) => {
          return (
            <li key={index}>
              <span>
                태그 {index} : {tag}
              </span>
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled('div')`
  padding: 1rem;
  margin: 1rem;
  background: #f3f3f3;
`;
export default ArticlePreview;
