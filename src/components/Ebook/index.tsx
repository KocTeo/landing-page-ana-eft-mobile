import Link from 'next/link'
import React from 'react'

import { EbookContainer } from './styles'

const Ebook: React.FC = () => {
  return (
    <EbookContainer>
      <Link href="https://sun.eduzz.com/1637046">
        <a target="_blank" className="btn-ebook">
          CONHEÇA MAIS COM MEU EBOOK
        </a>
      </Link>
    </EbookContainer>
  )
}

export default Ebook
