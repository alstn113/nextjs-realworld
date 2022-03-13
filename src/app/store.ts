import authSlice, { AuthState } from "@/features/authSlice";
import counterSlice, { CounterState } from "@/features/counterSlice";
import kanyeSlice, { KanyeState } from "@/features/kanyeSlice";
import { AnyAction, combineReducers, configureStore, EnhancedStore, Store } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const devMode = process.env.NODE_ENV !== "production";
interface IState {
  auth: AuthState;
  counter: CounterState;
  kanyeQuote: KanyeState;
}

const rootReducer = (state: IState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    [authSlice.name]: authSlice.reducer,
    [counterSlice.name]: counterSlice.reducer,
    [kanyeSlice.name]: kanyeSlice.reducer,
  })(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: devMode,
});

const setupStore = (): EnhancedStore => store;

const makeStore = () => setupStore();

export const wrapper = createWrapper<Store<IState>>(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
