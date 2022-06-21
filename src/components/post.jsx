import PostHeader from "./post-header";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import AvatarDate from "./avatarDate";

export default function PostComponent({ post }) {
  return (
    <div className="mx-auto w-10/12 shadow-md p-8 rounded-sm border">
      <PostHeader
        title={post.title}
        coverImage={post.featuredImage}
        date={post.date}
        author={post.author}
        categories={post.categories}
      />
      <div className="mt-4 -mx-8 border"></div>

      <PostBody content={post.content} />

      <div className="my-4 -mx-8 border"></div>

      <AvatarDate author={post.author} dateString={post.date} />
    </div>
  );
}
