import Head from "next/head";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import PostComponent from "../components/post";
import { getAllPostsForHome } from "../lib/api";
import { SITE_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const recentPost = edges[1]?.node;
  const recentPost2 = edges[2]?.node;

  const nextFive = [];

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <Container>
        <div className="flex border rounded-sm w-2/3">
          <div className="flex-col w-2/3">
            <div className="text-lg lg:text-2xl">
              <HeroPost className="" post={heroPost} />
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
          <div className="flex flex-col"></div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
