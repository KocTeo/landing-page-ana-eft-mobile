import styled from 'styled-components'

export const FooterContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    height: 31vh;

    bottom: 0;

    span {
      color: ${props => props.theme.colors.background};
      font-size: ${props => props.theme.fontSize.large};
      width: 80%;

      text-align: center;
      margin: 15px;

      margin-top: 50px;
    }

    .social {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 60%;
      width: 100%;

      .icon {
        font-size: 100px;
        margin: 15px;
      }
    }
  }
`
