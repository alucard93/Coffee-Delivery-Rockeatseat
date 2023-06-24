import styled from 'styled-components'
import ImagemCoffee from '../../../assets/ImagemCoffee.svg'

export const HeroSectionContainer = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  height: 544px;

  .container_hero_left_title {
    /* background-color: gold; */
    width: 588px;
    padding: 94px 0 108px 0;
  }

  .container_hero_left_title > h1 {
    font-size: 48px;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 16px;
  }

  .container_hero_left_title > p {
    font-size: 20px;
    font-family: Roboto;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 64px;
  }

  .container_hero_right_img {
    background-image: url(${ImagemCoffee});
    background-repeat: no-repeat;
    background-position: center center;

    width: 476px;
  }

  .container_benefit {
    display: grid;
    row-gap: 20px;
    grid-template-areas:
      'cart box'
      'clock coffee';
    align-items: center;
  }

  .background_cart {
    grid-area: cart;
    display: grid;
    column-gap: 12px;
    grid-template-columns: 32px 1fr;

    align-items: center;
  }

  .background_clock {
    grid-area: clock;
    display: grid;
    column-gap: 12px;
    grid-template-columns: 32px 1fr;
    align-items: center;
  }

  .background_box {
    grid-area: box;
    display: grid;
    column-gap: 12px;
    grid-template-columns: 32px 1fr;
    align-items: center;
  }

  .background_coffee {
    grid-area: coffee;
    display: grid;
    column-gap: 12px;
    grid-template-columns: 32px 1fr;
    align-items: center;
  }

  .background_cart > figure,
  .background_clock > figure,
  .background_box > figure,
  .background_coffee > figure {
    display: grid;
    place-content: center;
    border-radius: 50%;
    padding: 8px;
    height: 32px;
    width: 32px;
    aspect-ratio: 1/1;
  }

  .background_cart > figure {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  .background_clock > figure {
    background-color: ${({ theme }) => theme.yellow};
  }

  .background_box > figure {
    background-color: ${({ theme }) => theme['base-text']};
  }

  .background_coffee > figure {
    background-color: ${({ theme }) => theme.purple};
  }

  .icon_hero_benefit {
    height: 16px;
    width: 16px;
  }

  .background_car__text {
    font-size: 16px;
    font-family: Roboto;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }
`
