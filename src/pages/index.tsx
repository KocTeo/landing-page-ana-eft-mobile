import type { NextPage } from 'next'
import About from '../components/About'
import AboutEFT from '../components/AboutEFT'
import Benefits from '../components/Benefits'
import Ebook from '../components/Ebook'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Online from '../components/Online'
import Schedule from '../components/Schedule'
import Treatment from '../components/Treatment'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Schedule />
      <section className="texts">
        <AboutEFT />
        <Treatment />
        <Online />
      </section>
      <Ebook />
      <Benefits />
      <About />
      <Footer />
    </div>
  )
}

export default Home
