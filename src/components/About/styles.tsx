import styled from 'styled-components'

export const AboutContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    justify-content: center;
    height: 80vh;
    margin-top: 100px;

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

    p {
      width: 90vw;
      font-size: ${props => props.theme.fontSize.normal};
      font-family: ${props => props.theme.fonts.title};
      text-align: justify;

      margin-bottom: 50px;
    }
  }
`
