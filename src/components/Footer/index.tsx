import Link from 'next/link'
import React from 'react'

import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>Me siga nas Redes Sociais pra eventos e novidades</span>
      <div className="social">
        <Link href="https://www.instagram.com/euvejo__voce/">
          <a target="_blank">
            <AiFillInstagram className="icon" />
          </a>
        </Link>
        <Link href="https://www.facebook.com/analuciabettioeft/">
          <a target="_blank">
            <AiFillFacebook className="icon" />
          </a>
        </Link>
        <Link
          href="https://wa.me/553899785207?text=Olá,
          Li no seu site sobre seu trabalho e gostaria de saber mais!
        "
        >
          <a target="_blank">
            <IoLogoWhatsapp className="icon" />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}

export default Footer
