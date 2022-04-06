import styled from "styled-components"
import { transparentize } from "polished"
import { HEADER_HEIGHT } from "../_constants"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Link from "next/link"

export default function Header(props: any) {
  return (
    <Wrapper>
      <Container>
        <Link href={'/'} passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <NavBar />
      </Container>
    </Wrapper>
  )
}

const Title = styled.h1`
  color: ${p => p.theme.primaryBackground};
  `

const Wrapper = styled.div`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  box-shadow: 0 3px 10px ${p => transparentize(0.9, p.theme.pageForeground)};

  width: 100%;
  height: ${HEADER_HEIGHT};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 848px;
  margin: auto;
  height: 100%;

  padding: 0 16px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 5px 0;
  }
`

const Navbar = styled.nav`
`