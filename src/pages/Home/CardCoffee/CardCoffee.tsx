import { CardContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'
import ButtonCard from '../../../assets/Button_Card.svg'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'

export const CardCoffee = () => {
  const { products, menuCoffee, handlePlusClick, handlePlusDelete } =
    useContext(ProductsContext)

  // useEffect(() => {
  //   localStorage.setItem('checkoutProducts', JSON.stringify(products))
  // }, [products])

  return (
    <CardContainer>
      <section>
        <h3 className="title_coffe">Nossos cafés</h3>
        <div className="container_card">
          {menuCoffee.map((cardCoffee) => {
            const { id, img, type, name, description, price } = cardCoffee

            return (
              <article key={id}>
                <figure className="container_image">
                  <img src={img} alt="imagem expresso" />
                </figure>
                <div className="wrapper_types">
                  {type.map((coffeeType) => (
                    <div key={coffeeType} className="container_text_type">
                      <p className="text_type">{coffeeType}</p>
                    </div>
                  ))}
                </div>
                <h3 className="title_type">{name}</h3>
                <div className="container_info_price">
                  <p className="text_description">{description}</p>
                  <div className="container_price_button">
                    <span className="text_price">{price.toFixed(2)}</span>
                    <div className="container_button_icon">
                      <div className="container_button">
                        <Minus size={14} onClick={() => handlePlusDelete(id)} />
                        <span>1</span>
                        <Plus size={14} onClick={() => handlePlusClick(id)} />
                      </div>
                      <figure className="container_icon_cart">
                        <img
                          src={ButtonCard}
                          alt=""
                          onClick={() => handlePlusClick(id)}
                        />
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
