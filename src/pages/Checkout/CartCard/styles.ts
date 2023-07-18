import { styled } from 'styled-components'

export const CartCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 368px;

  gap: 20px;
  padding: 8px 4px;

  .teste {
    display: flex;

    width: 100%;
    max-width: 368px;

    gap: 20px;
    padding: 8px 4px;
  }
  /* &::before {
    content: '';
    position: absolute;
    bottom: -24px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme['base-button']};
  } */

  .container_figure {
    overflow: hidden;
  }

  .container_figure > img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .cart-card__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .container_button_remove {
    display: flex;
    gap: 8px;
  }

  .container_button {
    display: flex;
    width: 100%;
    max-width: 72px;
    align-items: center;
    justify-content: center;

    gap: 4px;

    height: 32px;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-button']};
  }

  .container_button > span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    padding: 0 4px;
  }

  .container_button > svg {
    color: ${({ theme }) => theme.purple};
  }

  .container_remove_icon {
    display: flex;
    width: 100%;
    max-width: 121px;
    align-items: center;
    justify-content: center;

    gap: 4px;

    height: 32px;
    padding: 0 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-button']};
  }

  .container_remove_icon > svg {
    color: ${({ theme }) => theme.purple};
  }

  .container_remove_icon > p {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};
  }

  .container_price {
    width: 100%;
    max-width: 89px;
    text-align: right;
  }

  .container_price > p,
  .text_price {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    color: ${({ theme }) => theme['base-text']};
  }

  .text_price {
    margin-left: 4px;
  }
`
