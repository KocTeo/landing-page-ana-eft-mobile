import styled from 'styled-components'

export const HeaderContainer = styled.div`
  @media (min-width: 1025px) {
    top: 0;
    left: 0;

    width: 100%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 300px;

    h1 {
      font-family: ${props => props.theme.fonts.title};

      margin-top: 60px;
      font-size: ${props => props.theme.fontSize.exLarge};
      margin-bottom: 20px;
      color: ${props => props.theme.colors.background};
    }

    h3 {
      font-family: ${props => props.theme.fonts.title};
      margin-bottom: 30px;
      font-size: ${props => props.theme.fontSize.xlarge};
      color: ${props => props.theme.colors.background};
    }

    span {
      font-family: ${props => props.theme.fonts.title};
      margin-bottom: 30px;
      font-size: ${props => props.theme.fontSize.xlarge};
      color: ${props => props.theme.colors.background};
      text-align: center;
      width: 60vw;
    }

    .background-blur {
      filter: blur(10px);
      background-size: contain;
      position: absolute;
      width: 100%;
      height: 80vh;
      z-index: -1;
      margin-top: 100px;
    }
  }

  @media (max-width: 1024px) {
    top: 0;
    left: 0;

    width: 100%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 50px;

    h1 {
      font-family: ${props => props.theme.fonts.title};

      margin-top: 60px;
      font-size: ${props => props.theme.fontSize.xlarge};
      margin-bottom: 20px;
      color: ${props => props.theme.colors.background};
    }

    h3 {
      font-family: ${props => props.theme.fonts.title};
      margin-bottom: 30px;
      font-size: ${props => props.theme.fontSize.xlarge};
      color: ${props => props.theme.colors.background};
    }

    span {
      font-family: ${props => props.theme.fonts.title};
      margin-bottom: 30px;
      font-size: ${props => props.theme.fontSize.large};
      color: ${props => props.theme.colors.background};
      text-align: center;
      width: 90vw;
    }

    .background-blur {
      filter: blur(10px);
      background-size: contain;
      position: absolute;
      width: 100%;
      height: 50vh;
      z-index: -1;
    }
  }
`
