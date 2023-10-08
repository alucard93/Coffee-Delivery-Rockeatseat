import { useContext, useEffect, useState } from 'react'
import { CartCardContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { ProductsContext } from '../../../contexts/ProductsContext'
// import { IProduct } from '../../../interfaces/ProductInterfaces'

export const CartCard = () => {
  // const [checkoutProducts, setCheckoutProducts] = useState([])
  const { products, handlePlusDelete, handlePlusClick } =
    useContext(ProductsContext)

  // useEffect(() => {
  //   const storedProducts = localStorage.getItem('checkoutProducts')
  //   if (storedProducts) {
  //     setCheckoutProducts(JSON.parse(storedProducts))
  //     // localStorage.removeItem('checkoutProducts')
  //   }

  useEffect(() => {
    console.log(products)
  }, [products])
  // }, [])

  return (
    <>
      {products.map((product) => (
        <CartCardContainer key={product.id}>
          <div className="teste">
            <figure className="container_figure">
              <img src={product.img} alt="" />
            </figure>
            <div className="cart-card__info">
              <p>{product.name}</p>
              <div className="container_button_remove">
                <div className="container_button">
                  <Minus
                    size={14}
                    onClick={() => handlePlusDelete(product.id)}
                  />
                  <span>{product.count}</span>
                  <Plus size={14} onClick={() => handlePlusClick(product.id)} />
                </div>
                <div
                  className="container_remove_icon"
                  onClick={() => handlePlusDelete(product.id)}
                >
                  <Trash size={16} />
                  <p>REMOVER</p>
                </div>
              </div>
            </div>
            <div className="container_price">
              <p>
                R$
                <span className="text_price">9,90</span>
              </p>
            </div>
          </div>
          <hr />
        </CartCardContainer>
      ))}
    </>
  )
}
