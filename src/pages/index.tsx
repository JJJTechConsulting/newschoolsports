import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import PostComponent from "../components/post";
import SectionSeparator from "../components/section-separator";
import { getAllPostsForHome } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import { AllPostsForHome, Post } from "../lib/types";

export default function Index({ allPosts: { edges } }: { allPosts: AllPostsForHome }) {
  const heroPost = edges[0]?.node;
  const recentPost = edges[1]?.node;
  const recentPost2 = edges[2]?.node;

  const nextFive = edges.slice(3, 8);

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div className="">
        <div className="flex flex-row border rounded-sm bg-white">
          <div className="flex flex-col w-2/3">
            <div className="text-lg lg:text-2xl">
              <HeroPost post={heroPost} />
            </div>
            <div className="flex flex-row">
              <div className="w-1/2">
                <HeroPost post={recentPost} />
              </div>
              <div className="w-1/2">
                <HeroPost post={recentPost2} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/4 p-4">
            {nextFive.map((post, index) => (
              <>
                {index == 0 && (
                  <div className="mb-4">
                    <Image src={post.node.featuredImage.node.sourceUrl} width={2000} height={1000} />
                  </div>
                )}
                <div className="flex flex-row items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-300 font-mono">{++index}</span>
                  <a className="text-sm font-medium" href={`/posts/${post.node.slug}`}>
                    {post.node.title}
                  </a>
                </div>
                {index < 5 && <SectionSeparator />}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts },
    revalidate: 10,
  };
};
