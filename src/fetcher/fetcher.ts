/* eslint-disable no-undef */
interface FetchParams {
  baseURL: string | undefined;
}

type HeadersInit = [string, string][] | Record<string, string> | Headers;

interface FetchConfig extends RequestInit {
  body?: any;
  headers?: HeadersInit;
}

interface FetchResponse<T = any> {
  data: T | null;
  status: number;
  statusText: string;
  error?: string;
}

const fetchParams: FetchParams = {
  baseURL: process.env.NEXT_PUBLIC_WEB_APP_URL,
};

const defaultHeaders: Record<string, string> = {
  // "x-api-version": "1.0.0",
  // "accept-language": "en",
  // "x-platform": "web",
  "Content-Type": "application/json",
};

const fetchWrapper = async <T = any>(
  url: string,
  config: FetchConfig = {}
): Promise<FetchResponse<T>> => {
  if (!fetchParams.baseURL) {
    throw new Error("Base URL is not defined");
  }
  const headers = { ...defaultHeaders, ...config.headers };
  try {
    const response = await fetch(fetchParams.baseURL + url, {
      ...config,
      headers, // Ensure headers are correctly set
    });

    const data: T = await response.json();
    return { data, status: response.status, statusText: response.statusText };
  } catch (error: any) {
    return {
      data: null,
      status: 500,
      statusText: error.message || "Unknown Error",
      error: error.message,
    };
  }
};

const api = {
  get: <T = any>(url: string, config?: Omit<FetchConfig, "method">) =>
    fetchWrapper<T>(url, { ...config, method: "GET" }),

  delete: <T = any>(url: string, config?: Omit<FetchConfig, "method">) =>
    fetchWrapper<T>(url, { ...config, method: "DELETE" }),

  post: <T = any>(
    url: string,
    body?: any,
    config?: Omit<FetchConfig, "method" | "body">
  ) =>
    fetchWrapper<T>(url, {
      ...config,
      method: "POST",
      body: JSON.stringify(body),
    }),

  patch: <T = any>(
    url: string,
    body?: any,
    config?: Omit<FetchConfig, "method" | "body">
  ) =>
    fetchWrapper<T>(url, {
      ...config,
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  put: <T = any>(
    url: string,
    body?: any,
    config?: Omit<FetchConfig, "method" | "body">
  ) =>
    fetchWrapper<T>(url, {
      ...config,
      method: "PUT",
      body: JSON.stringify(body),
    }),
};

export default api;
