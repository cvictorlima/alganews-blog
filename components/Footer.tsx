import styled from "styled-components"
import { transparentize } from "polished"
import { FOOTER_HEIGHT } from "../_constants"
import Logo from "./Logo"

export default function Footer(props: any) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Credits>Todos os direitos Reservados</Credits>
      </Container>
    </Wrapper>
  )
}

const Title = styled.h1`
  color: ${p => p.theme.primaryBackground};
  `

const Wrapper = styled.footer`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};

  width: 100%;
  height: ${FOOTER_HEIGHT};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 848px;
  margin: auto;
  height: 100%;
`

const Navbar = styled.nav`

`

const Credits = styled.p`
  font-size: 18px;
  color: ${p => transparentize(0.6, p.theme.activeElementForeground)};

`