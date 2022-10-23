import styled from 'styled-components'

export const EbookContainer = styled.div`
  @media (max-width: 1024px) {
    height: 15vh;
    display: flex;
    justify-content: center;

    .btn-ebook {
      display: flex;
      justify-content: center;
      align-items: center;

      filter: drop-shadow(2px 7px 10px #4b2142);
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};

      border-radius: 20px;
      border: none;

      width: 95%;
      height: 10vh;

      text-decoration: none;

      font-family: ${props => props.theme.fonts.title};
      font-weight: ${props => props.theme.fontWeight.bold};
      font-size: ${props => props.theme.fontSize.normal};
    }
  }
`
