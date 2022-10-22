import styled from 'styled-components'

export const EbookContainer = styled.div`
  @media (max-width: 1024px) {
    height: 15vh;
    text-align: center;

    button {
      width: 90vw;
      height: 60%;
      border-radius: ${props => props.theme.borderRadius.picture};
      border: none;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};

      font-family: ${props => props.theme.fonts.title};
      font-size: ${props => props.theme.fontSize.large};
    }
  }
`
