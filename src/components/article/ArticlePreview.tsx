import ArticleAPI from '@/api/article';
import { IArticle } from '@/interfaces/article.interface';
import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

interface PageProps {
  article: IArticle;
}

const ArticlePreview = ({ article }: PageProps) => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const router = useRouter();

  const handleClickFavorite = () => {
    if (!isLoggedIn) {
      router.push('/user/login');
    }
    if (article.favorited) {
      useUnFavorite.mutate();
    } else {
      useFavorite.mutate();
    }
  };

  const useFavorite = useMutation(
    'favorite',
    () => ArticleAPI.favorite(article.slug),
    {
      onSuccess: () => {
        article.favorited = true;
        article.favoritesCount += 1;
      },
    },
  );

  const useUnFavorite = useMutation(
    'unfavorite',
    () => ArticleAPI.unfavorite(article.slug),
    {
      onSuccess: () => {
        article.favorited = false;
        article.favoritesCount -= 1;
      },
    },
  );

  if (!article) return <div>not exists</div>;

  return (
    <Wrapper>
      <ArticleMeta>
        <Link href="/profile/[pid]" as={`/profile/${article.author.username}`}>
          <a>
            <Image
              src={article.author.image}
              alt="author's profile image"
              height={32}
              width={32}
            />
          </a>
        </Link>
        <Info>
          <Link
            href="/profile/[pid]"
            as={`/profile/${article.author.username}`}
          >
            <a>
              <div>{article.author.username}</div>
            </a>
          </Link>
          <span>{new Date(article.createdAt).toDateString()}</span>
        </Info>

        <FavoriteButton
          onClick={handleClickFavorite}
          isFavorite={article.favorited}
        >
          {article.favoritesCount}
        </FavoriteButton>
      </ArticleMeta>
      <Link href="/article/[pid]" as={`/article/${article.slug}`}>
        <a>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </a>
      </Link>
      <TagList>
        {article.tagList.map((tag, index) => {
          return (
            <li key={index}>
              <Link href={`/?tag=${tag}`} as={`/?tag=${tag}`}>
                <a>
                  <span>{tag}</span>
                </a>
              </Link>
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
    border-radius: 50%;
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

const FavoriteButton = styled('button')<{ isFavorite: boolean }>`
  border-radius: 0.25rem;
  border: 1px solid black;
  border-color: #5cb85c;
  background: ${({ isFavorite }) => (isFavorite ? '#5cb85c' : '#fff')};
  font-size: 0.5rem;
  font-weight: 500;
  padding: 0.5rem;
`;
export default ArticlePreview;
