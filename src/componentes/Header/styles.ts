import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > nav {
    display: flex;
    flex: 1;
    max-width: 1120px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 32px 0;
  }

  .container_location_buy_cart {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .container_pin_location {
    display: flex;
    align-items: center;
  }

  .container_pin_location > img {
    width: 22px;
    height: 22px;
  }

  .container_pin_location > p {
    font-size: 14px;
    font-family: Roboto;
    line-height: 130%;
    color: ${({ theme }) => theme['purple-dark']};
  }

  .border_shopping_cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme['yellow-light']};
    padding: 8px;
    border-radius: 6px;
  }

  .countHeader {
    position: absolute;
    right: -8.345px;
    top: -8px;
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    background: var(--brand-yellow-dark, #c47f17);

    color: var(--base-white, #fff);
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;
  }
`
