import React from 'react'
import { StyledCheckoutCompleted } from './style'

export const CheckoutCompleted = () => {
  return (
    <StyledCheckoutCompleted>
      <h1 className="text-order-confirm">Uhu! Pedido confirmado</h1>
      <p className="text-order-description">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div>
        <div></div>
      </div>
    </StyledCheckoutCompleted>
  )
}
