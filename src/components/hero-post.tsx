import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import { Post } from "../lib/types";

export default function HeroPost({ post }: Post) {
  return (
    <div className="p-4">
      <div className="mb-2">
        {post?.featuredImage && <CoverImage title={post.title} coverImage={post.featuredImage} slug={post.slug} />}
      </div>

      <div>
        <h3 className="mb-4 font-semibold leading-tight">
          <Link href={`/posts/${post?.slug}`}>
            <a className="hover:underline">{post?.title}</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
