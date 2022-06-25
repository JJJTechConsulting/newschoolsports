import PostHeader from "./post-header";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import AvatarDate from "./avatarDate";
import { Post } from "../lib/types";
import CoverImage from "./cover-image";

export default function PostComponent({ post }: Post) {
  return (
    <div className="shadow-md p-4 rounded-sm border bg-white w-full">
      <PostHeader title={post.title} date={post.date} author={post.author} categories={post.categories} />

      <div className="mt-4 -mx-4 border-2"></div>

      <div className="px-4">
        {post.featuredImage && (
          <div className="my-4">
            <CoverImage title={post.title} coverImage={post.featuredImage} slug={undefined} />
          </div>
        )}

        <PostBody content={post.content} />
      </div>

      <div className="my-4 -mx-4 border-2"></div>

      <AvatarDate author={post.author} dateString={post.date} />
    </div>
  );
}
