import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;

  & > nav {
    display: flex;
    flex: 1;
    max-width: 1120px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 32px 0;
  }

  .container-location-buy-cart {
    display: flex;
    gap: 12px;
  }
`
