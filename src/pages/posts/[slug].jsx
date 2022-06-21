import { useRouter } from "next/router";
import ErrorPage from "next/error";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
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
    <Layout preview={preview}>
      <>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <div className="flex flex-row">
              <article className="w-2/3">
                <Head>
                  <title>{post.title} | New School Sports</title>
                  <meta property="og:image" content={post.featuredImage?.sourceUrl} />
                </Head>
                <PostComponent post={post} />
                <footer>{post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>
              </article>

              <div className="w-1/3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, eum perspiciatis reprehenderit
                deleniti illo harum corporis, odit totam tenetur nemo adipisci voluptatum vitae exercitationem. Id nulla
                voluptatem cumque sequi voluptate.
              </div>
            </div>
          </>
        )}
      </>
    </Layout>
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
