import styled from 'styled-components'

export const EbookContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    height: 20vh;

    h3 {
      font-size: ${props => props.theme.fontSize.exLarge};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 20px;
    }

    .btn-ebook {
      display: flex;
      justify-content: center;
      align-items: center;

      filter: drop-shadow(2px 7px 10px #4b2142);
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};

      border-radius: ${props => props.theme.borderRadius.picture};
      border: none;

      width: 80%;
      height: 10vh;

      text-decoration: none;

      font-family: ${props => props.theme.fonts.title};
      font-weight: ${props => props.theme.fontWeight.bold};
      font-size: ${props => props.theme.fontSize.exLarge};

      &:hover {
        transition: 500ms;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.text};
      }
    }
  }

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
