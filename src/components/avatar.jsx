import Image from "next/image";

export default function Avatar({ author }) {
  const name = author
    ? author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name
    : null;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image src={author.node.avatar.url} width={"100%"} height={"100%"} className="rounded-full" alt={name} />
      </div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
}
