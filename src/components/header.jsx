import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between mx-16 mt-8 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold">
          <Link href="/">
            <a className="hover:underline">New School Sports</a>
          </Link>
        </h2>
        <div className="flex flex-row">
          <ul className="mx-2">
            <Link href={"/podcasts"}>Podcasts</Link>
          </ul>
          <ul className="mx-2">
            <Link href={"/blogs"}>Blogs</Link>
          </ul>
          <ul className="mx-2">
            <Link href={"/contact"}>Contact</Link>
          </ul>
          <ul className="mx-2">
            <Link href={"/about"}>About</Link>
          </ul>
        </div>
      </div>
    </>
  );
}
