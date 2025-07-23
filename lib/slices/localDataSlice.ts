import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib";

type LocalDataState = {};

const initialState: LocalDataState = {};

const localDataSlice = createSlice({
  name: "localData",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<object>) => {
    // },
  },
});

export const selectAuth = (state: RootState) => state._persist;

export const {} = localDataSlice.actions;

export default localDataSlice.reducer;
