import { AuthorType } from './author.type';

export interface Comments {
  comments: CommentType[];
}

export type CommentType = {
  id: string;
  body: string;
  slug: string;
  author: AuthorType;
  createdAt: number;
  updatedAt: number;
};
