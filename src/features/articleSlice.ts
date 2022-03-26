import { AppState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ArticleState {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const initialState: ArticleState = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    reset: state => {
      state = initialState;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    addTag: (state, action: PayloadAction<string>) => {
      const newTagList = state.tagList.concat(action.payload);
      state.tagList = newTagList;
    },
    removeTag: (state, action: PayloadAction<string>) => {
      const newTagList = state.tagList.filter(tag => tag !== action.payload);
      state.tagList = newTagList;
    },
  },
});

export const { setTitle, setDescription, setBody, addTag, removeTag } =
  articleSlice.actions;
export const selectArticle = (state: AppState) => state.article;
export default articleSlice;
