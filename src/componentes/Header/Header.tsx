import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Logo Coffe Delivery" />
        <div className="container-location-buy-cart">
          <div>
            <MapPin size={32} />
            <p>Porto Alegre,RS</p>
          </div>
          <img src="" alt="carrinho" />
        </div>
      </nav>
    </HeaderContainer>
  )
}
