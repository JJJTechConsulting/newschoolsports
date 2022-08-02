import PostHeader from "./post-header";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import AvatarDate from "./avatarDate";
import { Post } from "../lib/types";
import CoverImage from "./cover-image";
import { SITE_URL } from "../lib/constants";

export default function PostComponent({ post }: Post) {
  return (
    <div className="shadow-sm p-4 rounded-sm border bg-white w-full">
      <PostHeader
        title={post.title}
        date={post.date}
        author={post.author}
        categories={post.categories}
        url={SITE_URL + "/posts/" + post.slug}
      />

      <div className="mt-4 border"></div>

      <div className="px-4">
        {post.featuredImage && (
          <div className="my-4">
            <CoverImage title={post.title} coverImage={post.featuredImage} slug={undefined} />
          </div>
        )}

        <PostBody content={post.content} />
      </div>

      <div className="my-4 border"></div>

      <AvatarDate author={post.author} dateString={post.date} />
    </div>
  );
}
