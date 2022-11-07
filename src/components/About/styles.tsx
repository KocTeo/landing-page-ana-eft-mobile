import styled from 'styled-components'

export const AboutContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
    justify-content: center;
    height: 80vh;
    margin-top: 200px;

    h3 {
      font-size: ${props => props.theme.fontSize.exLarge};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 20px;
    }

    img {
      height: 80%;
      border-radius: ${props => props.theme.borderRadius.picture};
      margin-bottom: 45px;
    }

    p,
    span {
      width: 50%;
      font-size: ${props => props.theme.fontSize.large};
      font-family: ${props => props.theme.fonts.title};
      text-align: justify;
      margin: 10px;
    }

    span {
      text-align: center;
    }
    .name {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1439px) {
    margin-top: 250px;
    margin-bottom: 250px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    justify-content: center;
    height: 80vh;
    margin-top: 200px;

    h3 {
      font-size: ${props => props.theme.fontSize.large};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 15px;
    }

    img {
      height: 60%;
      border-radius: ${props => props.theme.borderRadius.picture};
      margin-bottom: 30px;
    }

    p,
    span {
      width: 90vw;
      font-size: ${props => props.theme.fontSize.normal};
      font-family: ${props => props.theme.fonts.title};
      text-align: justify;
      margin: 10px;
    }

    span {
      text-align: center;
    }
    .name {
      margin-bottom: 150px;
    }
  }
`
