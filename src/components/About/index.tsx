import React from 'react'

import { AboutContainer } from './styles'

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h3>Quem Sou Eu?</h3>
      <img src="/images/self-image.jpeg" alt="" />
      <p>
        A Técnica de Liberação Emocional foi desenvolvida pelo engenheiro
        americano Gary Craig. Ele compreendeu que a causa de todas as emoções
        negativas, os traumas, é uma interrupção do fluxo de energia do nosso
        corpo.
      </p>
    </AboutContainer>
  )
}

export default About
