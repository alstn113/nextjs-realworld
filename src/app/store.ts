import articleSlice, { ArticleState } from '@/features/articleSlice';
import counterSlice, { CounterState } from '@/features/counterSlice';
import kanyeSlice, { KanyeState } from '@/features/kanyeSlice';
import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const devMode = process.env.NODE_ENV !== 'production';

interface IState {
  counter: CounterState;
  kanyeQuote: KanyeState;
  article: ArticleState;
}

const rootReducer = (state: IState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [kanyeSlice.name]: kanyeSlice.reducer,
    [articleSlice.name]: articleSlice.reducer,
  })(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: devMode,
});
const setupStore = () => store;
const makeStore = () => setupStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: devMode,
});
