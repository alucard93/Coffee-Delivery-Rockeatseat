import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import Pin from '../../assets/Pin.svg'
import ShoppingCart from '../../assets/Shopping_Cart.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Logo Coffe Delivery" />
        </NavLink>
        <div className="container_location_buy_cart">
          <div className="container_pin_location">
            <img src={Pin} alt="icone do pin" />
            <p>Porto Alegre, RS</p>
          </div>
          <div className="border_shopping_cart">
            <NavLink to="/checkout">
              <img src={ShoppingCart} alt="icone do carrinho" />
            </NavLink>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}
