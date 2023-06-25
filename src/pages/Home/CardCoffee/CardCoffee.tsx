import React from 'react'
import Express from '../../../assets/Expresso.svg'
import { CardContainer } from './styles'
export const CardCoffee = () => {
  return (
    <CardContainer>
      <section>
        <article>
          <figure className="container_image">
            <img src={Express} alt="imagem expresso tradicional" />
          </figure>
          <div className="container_text_type">
            <p className="text_type">TRADICIONAL</p>
          </div>
          <h3 className="title_type">Expresso Tradicional</h3>
          <div className="container_info_price">
            <p className="text_description">
              O tradicional café feito com água quente e grãos moídos
            </p>
            <div>
              <span className="text_price">9,90</span>
              <div></div>
            </div>
          </div>
        </article>
      </section>
    </CardContainer>
  )
}
