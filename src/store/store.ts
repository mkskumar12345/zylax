import { configureStore } from "@reduxjs/toolkit";
import { rootApiSlice } from "./rootApi";

const store = configureStore({
  reducer: {
    [rootApiSlice.reducerPath]: rootApiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
