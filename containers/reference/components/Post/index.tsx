import type { Post } from "~containers/reference/types";

interface PostProps {
  post: Post;
}

function PostEnty({ post }: PostProps) {
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default PostEnty;
