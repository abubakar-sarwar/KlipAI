import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib";
import { CategoriesTypes } from "@/types";

type AuthState = {};

const initialState: AuthState = {};

export const Allslice = createSlice({
  name: "Allslice",
  initialState,
  reducers: {
    // setCart: (state, action: PayloadAction<>) => {
    // },
  },
});

export const selectAuth = (state: RootState) => state._persist;

export const {} = Allslice.actions;

export default Allslice.reducer;
