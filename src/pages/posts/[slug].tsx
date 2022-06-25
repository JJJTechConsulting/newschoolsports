import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Tags from "../../components/tags";
import PostComponent from "../../components/post";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <div className="flex flex-row">
              <div className="w-full">
                <Head>
                  <title>{post.title} | New School Sports</title>
                  <meta property="og:image" content={post.featuredImage?.sourceUrl} />
                </Head>
                <PostComponent post={post} />
                <footer>{post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
}

export async function getServerSideProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}
