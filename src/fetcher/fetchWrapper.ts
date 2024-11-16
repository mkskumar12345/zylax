"use server";

import api from "./fetcher";

interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
}

const fetchDataWrapper = async (endpoint: string): Promise<ApiResponse> => {
  try {
    const response = await api.get(endpoint);
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      return { data: null, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Fetch Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

const postDataWrapper = async (
  endpoint: string,
  payload: any
): Promise<ApiResponse> => {
  try {
    const response = await api.post(endpoint, payload);
    console.log(response);
    if (response.status === 201) {
      return { data: response.data, error: null };
    } else {
      return { data: response.data, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Post Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

const deleteDataWrapper = async (
  endpoint: string,
  payload: any,
  headers: Record<string, string>
): Promise<ApiResponse> => {
  try {
    const response = await api.delete(endpoint, { headers });
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      return { data: null, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Delete Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

const updateDataWrapper = async (
  endpoint: string,
  payload: any,
  headers: Record<string, string>
): Promise<ApiResponse> => {
  try {
    const response = await api.put(endpoint, payload, { headers });
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      return { data: null, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Update Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

const fetchDataWithHeaders = async (
  endpoint: string,
  headers: Record<string, string>
): Promise<ApiResponse> => {
  try {
    const response = await api.get(endpoint, { headers }); // Correctly pass headers
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      return { data: null, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Fetch Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

const patchDataWrapper = async (
  endpoint: string,
  payload: any
): Promise<ApiResponse> => {
  try {
    const response = await api.patch(endpoint, payload);
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      return { data: null, error: response.statusText };
    }
  } catch (error: any) {
    console.error("Patch Error:", error);
    return { data: null, error: error.message || "Unknown error occurred" };
  }
};

export {
  fetchDataWrapper,
  postDataWrapper,
  deleteDataWrapper,
  updateDataWrapper,
  fetchDataWithHeaders,
  patchDataWrapper,
};
