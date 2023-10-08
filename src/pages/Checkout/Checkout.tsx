import { useContext, useState } from 'react'
import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { CheckoutContainer } from './styles'
import { CartCard } from './CartCard/CartCard'
import { useForm } from 'react-hook-form'
import { ProductsContext } from '../../contexts/ProductsContext'

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState(null)
  const { products } = useContext(ProductsContext)
  console.log(products)

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(paymentMethod, data)

  const handlePaymentMethod = (method: any) => {
    setPaymentMethod(method)
  }

  const handleValidateAndSubmit = () => {
    trigger().then((isValid) => {
      if (isValid) {
        handleSubmit(onSubmit)()
      }
    })
  }

  const sumValuesProducts = products.reduce((acc, product) => {
    const valueTotal = product.count * product.price
    return acc + valueTotal
  }, 0)

  const valueTotal = sumValuesProducts + 3.5

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
            <input
              className="cep"
              type="text"
              placeholder="CEP"
              {...register('cep', { required: true })}
            />
            {errors.cep && <span>Cep é obrigatório</span>}
            <input
              className="street"
              type="text"
              placeholder="Rua"
              {...register('street', { required: true })}
            />
            {errors.street && <span>Rua é obrigatória</span>}
            <input
              className="number"
              type="number"
              placeholder="Número"
              {...register('number', { required: true })}
            />
            {errors.number && <span>Número é obrigatório</span>}
            <input
              className="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement', { required: true })}
            />
            {errors.complement && <span>Complemento é obrigatório</span>}
            <input
              className="district"
              type="text"
              placeholder="Bairro"
              {...register('district', { required: true })}
            />
            {errors.district && <span>Bairro é obrigatório</span>}
            <input
              className="city"
              type="text"
              placeholder="Cidade"
              {...register('city', { required: true })}
            />
            {errors.city && <span>Cidade é obrigatória</span>}
            <input
              className="uf"
              type="text"
              placeholder="UF"
              {...register('uf', { required: true })}
            />
            {errors.uf && <span>Cep é obrigatório</span>}
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
            <div
              className="container_form_payment"
              onClick={() => handlePaymentMethod('Cartão de Crédito')}
            >
              <CreditCard className="icon_payment" size={22} />
              <p className="text_payment">CARTÃO DE CRÉDITO</p>
            </div>
            <div
              className="container_form_payment"
              onClick={() => handlePaymentMethod('Cartão de Débito')}
            >
              <Bank className="icon_payment" size={22} />
              <p className="text_payment">CARTÃO DE DÉDITO</p>
            </div>
            <div
              className="container_form_payment"
              onClick={() => handlePaymentMethod('Dinheiro')}
            >
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
          {console.log(products)}
          {products.length === 0 && (
            <div className="container_paragraphs">
              <div className="container_paragraph top">
                <p className="text_total">Total de itens</p>
                <p className="text_money">
                  R$ <span className="text_price_cart">00,00</span>
                </p>
              </div>
              <div className="container_paragraph">
                <p className="text_total">Entrega</p>
                <p className="text_money">
                  R$ <span className="text_price_cart">0,00</span>
                </p>
              </div>
              <div className="container_paragraph_total">
                <p className="text_total_last">Total</p>
                <p className="text_money_last">
                  R$ <span className="text_price_cart_last">00,00</span>
                </p>
              </div>
            </div>
          )}
          {products?.length > 0 && (
            <div className="container_paragraphs">
              <div className="container_paragraph top">
                <p className="text_total">Total de itens</p>
                <p className="text_money">
                  R${' '}
                  <span className="text_price_cart">
                    {sumValuesProducts.toFixed(2)}
                  </span>
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
                  R${' '}
                  <span className="text_price_cart_last">
                    {valueTotal.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          )}
          <button className="confirm_button" onClick={handleValidateAndSubmit}>
            CONFIRMAR PEDIDO
          </button>
        </div>
      </article>
    </CheckoutContainer>
  )
}
