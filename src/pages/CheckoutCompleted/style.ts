import { styled } from 'styled-components'

export const StyledCheckoutCompleted = styled.div`
  .text-order-confirm {
    color: ${({ theme }) => theme['yellow-dark']};

    font-family: Baloo 2;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  .text-order-description {
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`
