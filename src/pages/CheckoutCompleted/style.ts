import { styled } from 'styled-components'

export const StyledCheckoutCompleted = styled.div`
  max-width: 1120px;
  display: flex;
  gap: 102px;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;

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

  .border-container-delivery-address {
    display: flex;
    width: 100%;
    max-width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    border-radius: 6px 36px;
    border: 1px solid #dbac2c;
    margin-top: 40px;
  }

  .container-delivery-address {
    display: flex;
    gap: 12px;
  }

  .text-delivery-address {
    color: var(--base-text, #574f4d);

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .strong-success {
    color: var(--base-text, #574f4d);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
