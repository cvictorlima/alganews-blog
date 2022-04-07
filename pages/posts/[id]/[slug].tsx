import { Post, PostService } from "algatest01-sdk"
import { ResourceNotFoundError } from "algatest01-sdk/dist/errors"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"
import PostHeader from "../../../components/PostHeader"


interface PostProps extends NextPageProps {
  post?: Post.Detailed
  host?: string
}

interface Params extends ParsedUrlQuery {
  id: string
  slug: string
}

export default function PostPage(props: PostProps) {
  const { post } = props
  return <>
    <Head>
      <link rel="canonical" href={`http://${props.host}/posts/${props.post?.id}/${props.post?.slug}`} />
    </Head>
    {post && (
      <>
        <PostHeader
          thumbnail={post?.imageUrls.large}
          createdAt={post?.createdAt}
          title={post?.title}
          editor={post?.editor}
        />
      </>
    )}
  </>
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> =
  async ({ params, req }) => {
    try {
      if (!params)
        return { notFound: true }

      const { id, slug } = params;

      const postId = Number(id)

      if (isNaN(postId)) return { notFound: true }

      const post = await PostService.getExistingPost(postId)

      return {
        props: {
          post,
          host: req.headers.host
        },
      }
    } catch (error) {
      if (error instanceof ResourceNotFoundError)
        return { notFound: true }
      return {
        props: {
          error: {
            message: error.message,
            statusCode: error.data?.status || 500,
          },
        },
      };
    }
  };