import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>EFT com Ana Lucia</h1>
      <h3>Transformação de vida</h3>
      <span>
        Caros visitantes, aqui vocês encontrarão uma forma de transformar suas
        vidas, desde que você se abra para essa transformação
      </span>
      <span>Meu coração vê o seu coração</span>
      <img
        src="/images/main-image.avif"
        className="background-blur"
        alt="Imagem Pessoal borrada"
      />
    </HeaderContainer>
  )
}

export default Header
