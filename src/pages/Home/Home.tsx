import { CardCoffee } from './CardCoffee/CardCoffee'
import { HeroSection } from './HeroSection/HeroSection'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <CardCoffee />
    </HomeContainer>
  )
}
