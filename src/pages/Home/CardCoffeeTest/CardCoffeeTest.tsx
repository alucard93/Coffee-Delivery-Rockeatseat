import { CardContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'
import ButtonCard from '../../../assets/Button_Card.svg'

interface ICardCoffee {
  id: string
  img: string
  type: string | string[]
  name: string
  description: string
}

interface IMenuCoffee {
  menuCoffee: ICardCoffee[]
}

export const CardCoffeeTest = ({ menuCoffee }: IMenuCoffee) => {
  return (
    <CardContainer>
      <section>
        <h3 className="title_coffe">Nossos cafés</h3>
        <div className="container_card">
          {menuCoffee.map((cardCoffee) => {
            const { id, img, type, name, description } = cardCoffee
            const coffeeTypes = Array.isArray(type) ? type : [type] // Verifica se type é um array

            return (
              <article key={id}>
                <figure className="container_image">
                  <img src={img} alt="imagem expresso" />
                </figure>
                <div className="wrapper_types">
                  {coffeeTypes.map((coffeeType) => (
                    <div key={coffeeType} className="container_text_type">
                      <p className="text_type">{coffeeType}</p>
                    </div>
                  ))}
                </div>
                <h3 className="title_type">{name}</h3>
                <div className="container_info_price">
                  <p className="text_description">{description}</p>
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
            )
          })}
        </div>
      </section>
    </CardContainer>
  )
}
