import { styled } from 'styled-components'

export const CheckoutContainer = styled.section`
  display: flex;
  margin: 0 auto;
  gap: 32px;

  width: 100%;
  max-width: 1120px;

  .container_form {
    width: 100%;
    max-width: 1120px;
    height: 640px;
  }

  .container_form > h3,
  .container_right > h3 {
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .container_wrapper {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    gap: 32px;

    width: 100%;
    max-width: 640px;
    height: 372px;

    margin-top: 15px;
    padding: 40px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-card']};
  }

  .container_icon_text {
    display: flex;
    gap: 8px;
  }

  .container_icon_text > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  .container_text > h3 {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .container_text > p {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme['base-text']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .container_wrapper > form {
    display: grid;
    grid-template-areas:
      'cep . . .'
      'street street street street'
      'number complement complement complement'
      'district city city uf';
    grid-template-columns: 200px 1fr 1fr 1fr;

    max-width: 560px;
    column-gap: 16px;
    row-gap: 12px;
  }

  .cep {
    grid-area: cep;
  }
  .street {
    grid-area: street;
  }
  .number {
    grid-area: number;
  }
  .complement {
    grid-area: complement;
    max-width: 348px;
  }
  .district {
    grid-area: district;
  }
  .city {
    grid-area: city;
    width: 276px;
  }
  .uf {
    grid-area: uf;
    max-width: 60px;
  }

  form > input {
    display: flex;
    width: 100%;
    padding: 12px;

    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    background-color: ${({ theme }) => theme['base-input']};
  }

  .container_wrapper_payment {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    gap: 32px;

    width: 100%;
    max-width: 640px;
    height: 207px;

    margin-top: 15px;
    padding: 40px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-card']};
  }

  .container_forms_payments {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .container_form_payment {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;

    background-color: ${({ theme }) => theme['base-button']};
  }

  .icon_payment {
    color: ${({ theme }) => theme.purple};
  }

  .text_payment {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};
  }

  /* RIGHT */
  .container_right {
    width: 100%;
    max-width: 448px;
  }

  .container_cart {
    width: 100%;
    max-width: 448px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    border-radius: 6px 44px;
    background-color: ${({ theme }) => theme['base-card']};

    margin-top: 15px;
  }

  .container_paragraph {
    display: flex;
    width: 100%;

    justify-content: space-between;
  }

  .text_total {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }

  .text_money,
  .text_price_cart {
    font-family: 'Roboto', sans-serif;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }

  .container_paragraph_total {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .text_total_last {
    font-family: 'Roboto', sans-serif;

    font-size: 20px;

    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  .text_money_last,
  .text_price_cart_last {
    font-family: 'Roboto', sans-serif;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
