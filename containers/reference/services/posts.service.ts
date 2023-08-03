import apiClient from "~utils/apiClient";

import type { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
  return apiClient.get<Post[]>("/posts");
};
export default {
  getPosts,
};
