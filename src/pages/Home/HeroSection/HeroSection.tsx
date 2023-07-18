import { HeroSectionContainer } from './styles'
import ShoppingCart from '../../../assets/hero/hero-cart.svg'
import Clock from '../../../assets/hero/hero-clock.svg'
import Box from '../../../assets/hero/hero-box.svg'
import Coffee from '../../../assets/hero/hero-coffee.svg'

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <div className="container_hero_left_title">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="container_benefit">
          <div className="background_cart">
            <figure>
              <img
                className="icon_hero_benefit"
                src={ShoppingCart}
                alt="icone do carrinho"
              />
            </figure>
            <span className="background_car__text">
              Compra simples e segura
            </span>
          </div>

          <div className="background_clock">
            <figure>
              <img src={Clock} alt="icone do relógio" />
            </figure>
            <span className="background_car__text">
              Entrega rápida e rastreada
            </span>
          </div>

          <div className="background_box">
            <figure>
              <img src={Box} alt="icone do box" />
            </figure>
            <span className="background_car__text">
              Embalagem mantém o café intacto
            </span>
          </div>

          <div className="background_coffee">
            <figure>
              <img src={Coffee} alt="icone do Café" />
            </figure>
            <span className="background_car__text">
              O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>
      <div className="container_hero_right_img"></div>
    </HeroSectionContainer>
  )
}
