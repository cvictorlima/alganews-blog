import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, 
  body {
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.pageForeground};
    font-family: "Lato", sans-serif;
  }

  .pagination{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: 4px;

    li{
      a{
        padding: 0 8px;
        min-width: 28px;
        height: 34px;
        transition: .25 ease;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        background-color: ${(p) => p.theme.inactiveElementBackground};
        color: ${(p) => p.theme.inactiveElementForeground};
        border-radius: ${(p) => p.theme.borderRadius};

        font-size: 12px;
      }
      
      &.disabled a {
        cursor: not-allowed;
        opacity: ${(p) => p.theme.inactiveElementOpacity};
      }

      &.selected a {
        background-color: ${(p) => p.theme.primaryBackground};
        color: ${(p) => p.theme.primaryForeground};

        cursor: default;

        &::before {
          content: "Página ";
          display: block;
          margin-right: 4px;
        }
      }

      &:not(.selected, .disabled) {
        &:hover,
        &:focus {
          a {
            transform: translateY(-3px);
            box-shadow: 0 3px 6px ${(p) =>
              transparentize(0.9, p.theme.pageForeground)};
          }
        }
    }
  }
`;
