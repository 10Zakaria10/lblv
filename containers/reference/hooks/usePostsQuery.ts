import { postService } from "../services";
import type { Post } from "../types";

import { postsQueryKey } from "./keys";

import { useQuery } from "react-query";
import { ApiError } from "~types/apiError";

function usePostsQuery() {
  const { isLoading: loading, data: posts, error } = useQuery<Post[], ApiError>(postsQueryKey(), postService.getPosts);

  return { loading, error, posts };
}

export default usePostsQuery;
