import { parseISO, format } from "date-fns";
import Image from "next/image";
import { Author } from "../lib/types";

export default function AvatarDate({ author, dateString }: { author: Author; dateString: string }) {
  const name = author
    ? author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name
    : null;

  const date = parseISO(dateString);

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image src={author.node.avatar.url} width={"100%"} height={"100%"} className="rounded-full" alt={name!!} />
      </div>
      <div className="-space-y-1">
        <div className="text-lg font-semibold">{name}</div>
        <div>
          <time className="italic" dateTime={dateString}>
            {format(date, "LLLL dd, yyyy hh:mm a")}
          </time>
        </div>
      </div>
    </div>
  );
}
