import { Post, PostService } from "algatest01-sdk"
import { ResourceNotFoundError } from "algatest01-sdk/dist/errors"
import { GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"


interface PostProps extends NextPageProps {
  post?: Post.Detailed
}

interface Params extends ParsedUrlQuery {
  id: string
  slug: string
}

export default function PostPage(props: PostProps) {
  if (props.error)
    return <div style={{ color: 'red' }}>{props.error.message}</div>

  return <>{props.post?.title}</>
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> =
  async ({ params, res }) => {
    try {
      if (!params)
        return { notFound: true }

      const { id, slug } = params;

      const postId = Number(id)

      if (isNaN(postId)) return { notFound: true }

      const post = await PostService.getExistingPost(postId)

      if (slug !== post.slug) {
        res.statusCode = 301;
        res.setHeader('Location', `/posts/${post.id}/${post.slug}`);
        return { props: {} }
      }

      return {
        props: {
          post: post
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