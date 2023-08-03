/* eslint-disable no-param-reassign */
import type { RootState } from "~store/types";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type IMyStoreState = {
  searchValue: string;
  filter: boolean[];
};

const initialState: IMyStoreState = {
  searchValue: "",
  filter: [false, false, false, false],
};

export const myStoreSlice = createSlice({
  name: "myStore",
  initialState,

  reducers: {
    resetSearch: (state) => {
      state.searchValue = "";
    },

    updateFilter: (state, action: PayloadAction<number>) => {
      state.filter[action.payload] = !state.filter[action.payload];
    },

    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { resetSearch, updateFilter, updateSearch } = myStoreSlice.actions;

export const selectMyStore = (state: RootState): IMyStoreState => state.myStore;

export const { reducer: myStoreReducer } = myStoreSlice;
