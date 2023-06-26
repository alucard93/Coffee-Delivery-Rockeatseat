import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100vh;

  & > section {
    padding: 0 0 157px 0;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  }

  .title_coffe {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 54px;
  }

  .container_card {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 32px;
    row-gap: 40px;
  }

  @media (max-width: 1080px) {
    .container_card {
      grid-template-columns: repeat(3, auto);
    }
  }

  .container_card > article {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    width: 100%;
    max-width: 256px;
    height: 310px;

    border-radius: 6px 36px;
    background-color: ${({ theme }) => theme['base-card']};
  }

  .wrapper_types {
    display: flex;
    gap: 4px;
  }

  .container_image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    height: 120px;

    margin-top: -20px;
  }

  .container_image > img {
    width: 100%;
    max-width: 100%;
  }

  .container_text_type {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};

    margin-top: 16px;
    margin-bottom: 20px;
  }

  .text_type {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  .title_type {
    color: ${({ theme }) => theme['base-subtitle']};

    text-align: center;

    font-size: 20px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
  }

  .container_info_price {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    gap: 36px;

    padding: 0 0 0 24px;
  }

  .text_description {
    color: ${({ theme }) => theme['base-label']};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    width: 100%;
    text-align: center;

    max-width: 216px;
  }

  .text_price {
    position: relative;
    padding-left: 24px;
    text-align: right;
    font-size: 24px;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    display: flex;
    align-items: center;
  }

  .text_price::before {
    position: absolute;
    content: 'R$';
    left: 4px;
    top: 50%; /* Alterado de "bottom: 0;" para "top: 50%;" */
    transform: translateY(-40%); /* Adicionado "transform: translateY(-50%);" */
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    text-align: right;
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }

  .container_price_button {
    display: flex;
    justify-content: space-between;
  }

  .container_button_icon {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 24px;
  }

  .container_button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    gap: 4px;

    height: 38px;
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

  .container_icon_cart {
    display: flex;
    align-items: center;
  }

  .container_button > svg {
    color: ${({ theme }) => theme.purple};
  }
`
