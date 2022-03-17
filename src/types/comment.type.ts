import { IAuthor } from './author.type';

export interface ICommentList {
  comments: IComment[];
}

export interface IComment {
  id: string;
  body: string;
  slug: string;
  author: IAuthor;
  createdAt: number;
  updatedAt: number;
}
