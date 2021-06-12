import { configureStore } from "@reduxjs/toolkit";

import sumSlice from "./Sum/sumSlice";

const store = configureStore({
  reducer: {
    sum: sumSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
