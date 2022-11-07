import React from 'react'

import { AboutContainer } from './styles'

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h3>Quem Sou Eu?</h3>
      <img src="/images/self-image.avif" alt="Imagem Pessoal de Ana" />
      <p>
        Olá, sou Ana Lucia Bettio Terapeuta Holística, formada em administração
        de empresas. Atuo nesta área de terapia holística a quase três anos e
        hoje ajudo pessoas a olharem para seus traumas de maneira manneira que
        nao traga mais sofrimento, a elevarem sua autoestima, eliminando crenças
        limitantes em todos os níveis da vida. Tenho como objetivo fazer com que
        o maior número de pessoas que chegarem até mim possa ter suas vidas
        transformadas.
      </p>
      <span>Meu coração vê o seu coração</span>
      <span className="name">Ana Lucia Bettio</span>
    </AboutContainer>
  )
}

export default About
