import styled from 'styled-components'

export const ScheduleContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    height: 15vh;

    h3 {
      font-size: ${props => props.theme.fontSize.large};
      font-family: ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};

      margin-bottom: 15px;
    }

    button {
      width: 80vw;
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
