import Link from "next/link"
import styled from "styled-components"

export default function NavBar() {
  return (
    <nav>
      <Wrapper>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </Wrapper>
    </nav>
  )
}

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;

  a{
    text-decoration: none;
    color: ${p => p.theme.pageForeground};
    text-transform: lowercase;
  }
`

