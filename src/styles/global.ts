import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.text};
    font-size: ${props => props.theme.fontSize.normal};
    font-weight: ${props => props.theme.fontWeight.regular};
  }

  @media (min-width: 1025px) {
    .texts {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 100px;
    }
  }
`
