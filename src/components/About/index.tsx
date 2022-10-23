import React from 'react'

import { AboutContainer } from './styles'

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h3>Quem Sou Eu?</h3>
      <img src="/images/self-image.jpeg" alt="" />
      <p>
        Olá, sou Ana Lucia Bettio Terapeuta Holística, me formei no Instituto
        EFT Brasil, no curso EFT Pro, instrutor André Lima, formada em
        administração de empresas. Atuo nesta área de terapia holística a quase
        três anos e hoje ajudo pessoas a ressignificarem traumas, a elevarem sua
        autoestima, eliminando crenças limitantes em todos os níveis da vida.
        Tenho como objetivo fazer com que o maior número de pessoas que chegarem
        até mim possa ter suas vidas transformadas.
      </p>
    </AboutContainer>
  )
}

export default About
