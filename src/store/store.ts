import { configureStore } from "@reduxjs/toolkit";
import { rootApiSlice } from "./rootApi";
import { popupSlice } from "./slices/popupSlice";
import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    [rootApiSlice.reducerPath]: rootApiSlice.reducer,
    popups: popupSlice.reducer,
    cart: cartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
