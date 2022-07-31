import Link from "next/link";
import Container from "./container";
import Logo from "./logo";

export default function Header() {
  const navigation = [
    // { title: "Podcasts", href: "/podcasts" },
    // { title: "Blogs", href: "/blogs" },
    // { title: "Contact", href: "/contact" },
    // { title: "About", href: "/about" },
  ];

  return (
    <Container>
      <div className="flex items-center sm:justify-between px-4 mt-8 mb-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          <Link href="/">
            <div className="flex items-center justify-center">
              <Logo className="w-48" />
              {/* <span>New School Sports</span> */}
            </div>
          </Link>
        </h2>
        <div className="hidden sm:flex space-x-4">
          {navigation.map((link) => (
            <ul>
              <Link href={link.href}>{link.title}</Link>
            </ul>
          ))}
        </div>
      </div>
      {navigation.length > 0 && (
        <div className="py-4 flex justify-center sm:hidden border-t space-x-4">
          {navigation.map((link) => (
            <ul className="">
              <Link href={link.href}>{link.title}</Link>
            </ul>
          ))}
        </div>
      )}
    </Container>
  );
}
