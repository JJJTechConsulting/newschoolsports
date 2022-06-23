import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Categories from "./categories";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug, categories }) {
  return (
    <div>
      <div className="mb-5">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      <h3 className="text-xl font-semibold leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></a>
        </Link>
      </h3>
      <div className="text-lg leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div className="flex flex-row items-center ml-4 space-x-2">
        <Avatar author={author} />

        <Categories categories={categories} />

        <div className="text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
