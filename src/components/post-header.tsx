import AvatarDate from "./avatarDate";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, date, author, categories }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-2">
          <AvatarDate author={author} dateString={date} />
        </div>
        <div className="flex flex-row space-x-2">
          <ul className="rounded-full">FB</ul>
          <ul className="rounded-full">FB</ul>
          <ul className="rounded-full">FB</ul>
          <ul className="rounded-full">FB</ul>
        </div>
      </div>
    </>
  );
}
