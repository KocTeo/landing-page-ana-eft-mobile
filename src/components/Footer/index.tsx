import React from 'react'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>Me siga nas Redes Sociais pra eventos e novidades</span>
      <div className="social">
        <div className="icon">
          <AiFillInstagram />
        </div>
        <div className="icon">
          <AiFillFacebook />
        </div>
        <div className="icon">
          <IoLogoWhatsapp />
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
