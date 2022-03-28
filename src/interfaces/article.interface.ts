import { IAuthor } from './author.interface';

export interface IArticleList {
  articles: IArticle[];
}

export interface IArticle {
  title: string;
  author: IAuthor;
  description: string;
  body: string;
  slug: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  createdAt: number;
  updatedAt: number;
}

export interface IArticleRequest {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}
