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

    .btn-schedule {
      display: flex;
      justify-content: center;
      align-items: center;

      filter: drop-shadow(2px 7px 10px #4b2142);
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};

      border-radius: 20px;
      border: none;

      width: 90%;
      height: 10vh;

      text-decoration: none;

      font-family: ${props => props.theme.fonts.title};
      font-weight: ${props => props.theme.fontWeight.bold};
      font-size: ${props => props.theme.fontSize.large};
    }
  }
`
