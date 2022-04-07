import { Post } from "algatest01-sdk";
import Image from "next/image";
import { transparentize } from "polished";
import styled from "styled-components";
import formatPostDate from "../core/utils/formatPostDate";

interface PostHeaderProps {
  thumbnail: string
  createdAt: string
  title: string
  editor: Post.Detailed["editor"]
}

export default function PostHeader(props: PostHeaderProps) {
  const { thumbnail, createdAt, title, editor } = props;
  return <Wrapper>
    <Thumbnail>
      <Image
        src={thumbnail}
        alt={title}
        width={848}
        height={256}
      />
    </Thumbnail>
    <Editor>
      <Image
        src={editor.avatarUrls.small}
        height={64}
        width={64}
        objectFit={'cover'}
        alt={editor.name}
      />
    </Editor>
    <PublishDate>{formatPostDate(createdAt)}</PublishDate>
    <Title>{title}</Title>
  </Wrapper>;
}



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const Thumbnail = styled.div`
  height: 256px;
  width: 100%;
  border-top-left-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  object-fit: cover;

  img {
    height: 100%;
    object-fit: cover;
  }
`

const Editor = styled.div`
  position: relative;
  margin-top: -64px;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 4px ${p => p.theme.pageBackground};

  img {
    border-radius: 32px;
  }
`

const PublishDate = styled.p`
  color: ${p => transparentize(0.5, p.theme.pageForeground)};
  font-size: 12px;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`
