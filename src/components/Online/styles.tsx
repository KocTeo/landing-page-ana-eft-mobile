import styled from 'styled-components'

export const OnlineContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;
    justify-content: center;

    h3 {
      font-size: ${props => props.theme.fontSize.xlarge};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 15px;
    }

    p {
      width: 25vw;
      font-size: ${props => props.theme.fontSize.large};
      font-family: ${props => props.theme.fonts.title};
      text-align: justify;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;

    height: 30vh;

    h3 {
      font-size: ${props => props.theme.fontSize.large};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 15px;
    }

    p {
      width: 90vw;
      font-size: ${props => props.theme.fontSize.normal};
      font-family: ${props => props.theme.fonts.title};
      text-align: justify;
    }

    span {
      width: 90vw;
      font-size: ${props => props.theme.fontSize.small};
      font-family: ${props => props.theme.fonts.text};
      text-align: center;
      margin-top: 30px;
    }
  }
`
