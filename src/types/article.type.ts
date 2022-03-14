import { AuthorType } from './author.type';

export interface ArticleList {
  articles: ArticleType[];
}

export interface Article {
  article: ArticleType;
}

export type ArticleType = {
  title: string;
  author: AuthorType;
  description: string;
  body: string;
  slug: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  createdAt: number;
  updatedAt: number;
};
