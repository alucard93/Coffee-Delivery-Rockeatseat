import { StyledCheckoutCompleted } from './style'

import PinSucess from '../../componentes/svg/PinSucess'
import ClockSuccess from '../../componentes/svg/ClockSuccess'
import DollarSuccess from '../../componentes/svg/DollarSuccess'
import AnimationSuccess from '../../componentes/svg/AnimationSuccess'

export const CheckoutCompleted = () => {
  return (
    <StyledCheckoutCompleted>
      <div>
        <h1 className="text-order-confirm">Uhu! Pedido confirmado</h1>
        <p className="text-order-description">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="border-container-delivery-address">
          <div className="container-delivery-address">
            <PinSucess />
            <p className="text-delivery-address">
              Entrega em{' '}
              <strong className="strong-success">
                Rua João Daniel Martinelli, 102
              </strong>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>
          <div className="container-delivery-address">
            <ClockSuccess />
            <p className="text-delivery-address">
              Previsão de entrega <br />
              <strong className="strong-success">20 min - 30 min</strong>
            </p>
          </div>
          <div className="container-delivery-address">
            <DollarSuccess />
            <p className="text-delivery-address">
              Pagamento na entrega <br />
              <strong className="strong-success">Cartão de Crédito</strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <AnimationSuccess />
      </div>
    </StyledCheckoutCompleted>
  )
}
