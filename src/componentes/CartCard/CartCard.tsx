import React from 'react'
import coffe from '../../assets/Expresso.svg'
import { CartCardContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

export const CartCard = () => {
  return (
    <CartCardContainer>
      <figure className="container_figure">
        <img src={coffe} alt="" />
      </figure>

      <div className="cart-card__info">
        <p>Expresso Tradicional</p>
        <div className="container_button_remove">
          <div className="container_button">
            <Minus size={14} />
            <span>1</span>
            <Plus size={14} />
          </div>
          <div className="container_remove_icon">
            <Trash size={16} />
            <p>REMOVER</p>
          </div>
        </div>
      </div>

      <div className="container_price">
        <p>
          R$
          <span className="text_price">9,90</span>
        </p>
      </div>
    </CartCardContainer>
  )
}
