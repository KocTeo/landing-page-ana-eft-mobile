import type { NextPage } from 'next'
import AboutEFT from '../components/AboutEFT'
import Benefits from '../components/Benefits'
import Ebook from '../components/Ebook'
import Header from '../components/Header'
import Online from '../components/Online'
import Schedule from '../components/Schedule'
import Treatment from '../components/Treatment'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Schedule />
      <AboutEFT />
      <Treatment />
      <Online />
      <Ebook />
      <Benefits />
      <div>
        <div>
          O atendimento online é tão eficiente quanto o atendimento presencial e
          oferece os mesmos benefícios tanto físico, emocional e energético para
          o paciente.
        </div>
        <img alt="" src="../rectangle-11@2x.png" />
        <b>Quem Sou Eu?</b>
      </div>
      <div>
        <div />
        <div>Me siga nas Redes Sociais pra eventos e novidades</div>
        <img alt="" src="../cones.svg" />
        <b>Redes Sociais</b>
      </div>
      <div>
        <b>Benefícios</b>
        <img alt="" src="../rectangle-27@2x.png" />
        <img alt="" src="../rectangle-27@2x.png" />
        <img alt="" src="../rectangle-27@2x.png" />
      </div>
      <div>AJUDA NO AUTOCONHECIMENTO</div>
      <div>AJUDA NO AUTOCONHECIMENTO</div>
      <div>AJUDA NO AUTOCONHECIMENTO</div>
    </div>
  )
}

export default Home
