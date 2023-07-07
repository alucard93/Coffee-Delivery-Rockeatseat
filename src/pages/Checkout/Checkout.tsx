import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { CheckoutContainer } from './styles'
import { CartCard } from '../../componentes/CartCard/CartCard'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <article className="container_form">
        <h3>Complete seu pedido</h3>
        <div className="container_wrapper">
          <div className="container_icon_text">
            <MapPinLine size={22} />
            <div className="container_text">
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form>
            <input className="cep" type="text" placeholder="CEP" />
            <input className="street" type="text" placeholder="Rua" />
            <input className="number" type="number" placeholder="Número" />
            <input
              className="complement"
              type="text"
              placeholder="Complemento"
            />
            <input className="district" type="text" placeholder="Bairro" />
            <input className="city" type="text" placeholder="Cidade" />
            <input className="uf" type="text" placeholder="UF" />
          </form>
        </div>
        <div className="container_wrapper_payment">
          <div className="container_icon_text">
            <CurrencyDollar size={22} />
            <div className="container_text">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="container_forms_payments">
            <div className="container_form_payment">
              <CreditCard className="icon_payment" size={22} />
              <p className="text_payment">CARTÃO DE CRÉDITO</p>
            </div>

            <div className="container_form_payment">
              <Bank className="icon_payment" size={22} />
              <p className="text_payment">CARTÃO DE DÉDITO</p>
            </div>

            <div className="container_form_payment">
              <Money className="icon_payment" size={22} />
              <p className="text_payment">DINHEIRO</p>
            </div>
          </div>
        </div>
      </article>

      <article className="container_right">
        <h3>Cafés selecionados</h3>
        <div className="container_cart">
          <CartCard />
          <CartCard />
          <div className="container_paragraph">
            <p className="text_total">Total de itens</p>
            <p className="text_money">
              R$ <span className="text_price_cart">29,70</span>
            </p>
          </div>
          <div className="container_paragraph">
            <p className="text_total">Entrega</p>
            <p className="text_money">
              R$ <span className="text_price_cart">3,50</span>
            </p>
          </div>
          <div className="container_paragraph_total">
            <p className="text_total_last">Total</p>
            <p className="text_money_last">
              R$ <span className="text_price_cart_last">33,20</span>
            </p>
          </div>
          <button className="confirm_button">CONFIRMAR PEDIDO</button>
        </div>
      </article>
    </CheckoutContainer>
  )
}
