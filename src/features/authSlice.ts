import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  access_token: string;
  me?: { id?: number; email?: string };
}

const initialState: AuthState = {
  access_token: "",
  me: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    updateAcessToken(state, action: PayloadAction<{ access_token: string }>) {
      state.access_token = action.payload.access_token;
    },
  },
  extraReducers: () => {
    return;
  },
});

export const { reset, updateAcessToken } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice;
