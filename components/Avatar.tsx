import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"
import avatar from "../public/avatar.jpg"

interface AvatarProps {
  src: string
}

export default function Avatar(props: AvatarProps) {
  const [src, setSrc] = useState(props.src)

  return <Wrapper>
    <StyledAvatar
      height={40}
      width={40}
      src={src}
      onError={(e) => {
        setSrc(avatar.src)
      }}
    />
  </Wrapper>
}

const StyledAvatar = styled(Image)`
  object-fit: cover;
`

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px ${p => p.theme.primaryForeground};
  overflow: hidden;
`