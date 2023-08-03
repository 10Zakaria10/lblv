import type { Post } from "~containers/reference/types";

import PostEntry from "../Post";

interface PostsProps {
  posts?: Post[];
}

function Posts({ posts }: PostsProps) {
  if (!posts) return null;

  return (
    <div>
      {posts.map((post) => (
        <PostEntry key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
