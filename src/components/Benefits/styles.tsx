import styled from 'styled-components'

export const BenefitsContainer = styled.div`
  @media (min-width: 1025px) {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 60px;

    background-color: ${props => props.theme.colors.primary};

    .elipse-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 25%;

      span {
        width: 80%;
        text-align: center;

        font-size: ${props => props.theme.fontSize.xlarge};
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.colors.background};
      }
    }

    .elipse {
      width: 50%;
      height: 10rem;
      margin: 15px;
    }
  }

  @media (max-width: 1024px) {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-bottom: 60px;

    background-color: ${props => props.theme.colors.primary};

    .elipse-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        width: 100%;
        text-align: center;

        margin-top: 20px;

        font-size: ${props => props.theme.fontSize.large};
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.colors.background};
      }
    }

    .elipse {
      width: 50%;
      height: 60%;
    }
  }
`
