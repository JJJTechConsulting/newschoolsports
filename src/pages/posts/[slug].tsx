import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Tags from "../../components/tags";
import PostComponent from "../../components/post";
import { SITE_URL } from "../../lib/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  const author = post.author;

  const name = author
    ? author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name
    : null;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const url = SITE_URL + "/posts/" + post.slug;

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
                  <meta name="description" content={(post.excerpt as string).substring(0, 315) + "..."} />
                  <meta name="author" content={name} />
                  <meta name="url" content={url} />
                  <link rel="canonical" href={url} />
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
