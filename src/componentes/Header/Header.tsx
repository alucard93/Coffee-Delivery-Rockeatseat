import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import Pin from '../../assets/Pin.svg'
import ShoppingCart from '../../assets/Shopping_Cart.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Logo Coffe Delivery" />
        <div className="container_location_buy_cart">
          <div className="container_pin_location">
            <img src={Pin} alt="icone do pin" />
            <p>Porto Alegre, RS</p>
          </div>
          <div className="border_shopping_cart">
            <img src={ShoppingCart} alt="icone do carrinho" />
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}
