
import Express from '../../../assets/Expresso.svg'
import { CardContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'
import ButtonCard from '../../../assets/Button_Card.svg'
export const CardCoffee = () => {
  return (
    <CardContainer>
      <section>
        <h3 className="title_coffe">Nossos cafés</h3>
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
            <div className="container_price_button">
              <span className="text_price">9,90</span>
              <div className="container_button_icon">
                <div className="container_button">
                  <Minus size={14} />
                  <span>1</span>
                  <Plus size={14} />
                </div>
                <figure className="container_icon_cart">
                  <img src={ButtonCard} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </article>
      </section>
    </CardContainer>
  )
}
