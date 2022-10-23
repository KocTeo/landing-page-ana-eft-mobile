import Link from 'next/link'
import React from 'react'

import { ScheduleContainer } from './styles'

const Schedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <h3>Consulta Exeperimental Grátis</h3>
      <Link
        href="https://wa.me/553899785207?text=Olá,
          gostaria de agendar uma sessão grátis!
        "
      >
        <a target="_blank" className="btn-schedule">
          AGENDE AGORA
        </a>
      </Link>
    </ScheduleContainer>
  )
}

export default Schedule
