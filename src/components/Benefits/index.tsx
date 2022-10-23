import React from 'react'

import { FcApprove, FcBiotech, FcBrokenLink } from 'react-icons/fc'

import { BenefitsContainer } from './styles'

const Benefits: React.FC = () => {
  return (
    <BenefitsContainer>
      <div className="elipse-container">
        <FcBiotech className="elipse" />
        <span>AJUDA NO AUTOCONHECIMENTO</span>
      </div>
      <div className="elipse-container">
        <FcApprove className="elipse" />
        <span>AUXILIA NO EQUILÍBRIO EMOCIONAL</span>
      </div>
      <div className="elipse-container">
        <FcBrokenLink className="elipse" />
        <span>RESSIGNIFICA TRAUMAS</span>
      </div>
    </BenefitsContainer>
  )
}

export default Benefits
