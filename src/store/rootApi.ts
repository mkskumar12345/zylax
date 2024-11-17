import { clearCookies, getToken } from "@/serverActions/cookies";
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const defaultHeaders = {
  // "x-api-version": "1.0.0",
  // "accept-language": "en",
  // "x-platform": "web",
  "Content-Type": "application/json",
};

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_WEB_APP_URL,
  prepareHeaders: async (headers) => {
    const token = await getToken();
    Object.entries(defaultHeaders).forEach(([key, value]) => {
      headers.set(key, value);
    });

    if (token) {
      headers.set("x-access-token", token.authToken || "");
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    clearCookies();
  }
  return result;
};

export const rootApiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: ["product-list", "brands-list", "favorite-product"],
});
