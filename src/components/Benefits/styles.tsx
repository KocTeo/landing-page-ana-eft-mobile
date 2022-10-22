import styled from 'styled-components'

export const BenefitsContainer = styled.div`
  @media (max-width: 1024px) {
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-bottom: 50px;

    .elipse-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: 15px;
      width: 42.7%;
      height: 45%;

      span {
        width: 100%;
        text-align: center;
        margin: 15px;
      }
    }

    .elipse {
      width: 80%;
      height: 80%;
    }
  }
`
