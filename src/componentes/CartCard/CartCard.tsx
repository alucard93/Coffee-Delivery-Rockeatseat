import React, { useState } from 'react'
import { CartCardContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import Express from '../../assets/Expresso.svg'
import Americano from '../../assets/Americano.svg'
import Cremoso from '../../assets/ExpressoCremoso.svg'

export const CartCard = () => {
  const [produCart, setProduCart] = useState([
    {
      id: '1',
      img: Express,
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: '2',
      img: Americano,
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
    },
  ])

  return (
    <>
      {produCart.map((product) => (
        <CartCardContainer key={product.id}>
          <div className="teste">
            <figure className="container_figure">
              <img src={product.img} alt="" />
            </figure>
            <div className="cart-card__info">
              <p>{product.name}</p>
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
          </div>
          <hr />
        </CartCardContainer>
      ))}
    </>
  )
}
