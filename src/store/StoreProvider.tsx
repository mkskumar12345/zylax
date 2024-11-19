"use client";

import { Provider } from "react-redux";
import store from "./store";
import IntialCartProvider from "./IntialCartProvider";

const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <IntialCartProvider>{children}</IntialCartProvider>
  </Provider>
);

export default StoreProvider;
