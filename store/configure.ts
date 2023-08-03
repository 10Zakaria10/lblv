import { configureStore } from "@reduxjs/toolkit";
import { myStoreReducer } from "./myStore/slice";

export const store = configureStore({
  reducer: {
    myStore: myStoreReducer,
  },
});
