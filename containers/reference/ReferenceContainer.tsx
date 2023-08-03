import Posts from "./components/Posts";
import { usePostsQuery } from "./hooks";

export const ReferenceContainer = () => {
  const { loading, posts } = usePostsQuery();

  if (loading) return <h1>loading</h1>;
  return <Posts posts={posts} />;
};
