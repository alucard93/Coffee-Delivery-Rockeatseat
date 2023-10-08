// @ts-nocheck
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from 'react'

import Express from '../assets/Expresso.svg'
import Americano from '../assets/Americano.svg'
import Cremoso from '../assets/ExpressoCremoso.svg'
import Gelado from '../assets/CaféGelado.svg'
import CafeComLeite from '../assets/CaféComLeite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mocaccino from '../assets/Mochaccino.svg'
import ChocolateQuente from '../assets/ChocolateQuente.svg'
import Cubano from '../assets/Cubano.svg'
import Havaiano from '../assets/Havaiano.svg'
import Arabe from '../assets/Árabe.svg'
import Irlandes from '../assets/Irlandês.svg'

interface ProductProviderProps {
  children: ReactNode
}

interface ICardCoffee {
  id: string
  img: string
  type: string[]
  name: string
  description: string
  count: number
  price: number
}

interface ProductContextType {
  products: ICardCoffee[]
  setProducts: Dispatch<SetStateAction<ICardCoffee[]>>
  menuCoffee: ICardCoffee[]
  handlePlusClick: (id: string) => void
  handlePlusDelete: (id: string) => void
}

const menuCoffee = [
  {
    id: '1',
    img: Express,
    type: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    count: 0,
    price: 9.9,
  },
  {
    id: '2',
    img: Americano,
    type: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    count: 0,
    price: 9.9,
  },
  {
    id: '3',
    img: Cremoso,
    type: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    count: 0,
    price: 9.9,
  },
  {
    id: '4',
    img: Gelado,
    type: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    count: 0,
    price: 9.9,
  },
  {
    id: '5',
    img: CafeComLeite,
    type: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    count: 0,
    price: 9.9,
  },
  {
    id: '6',
    img: Latte,
    type: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    count: 0,
    price: 9.9,
  },
  {
    id: '7',
    img: Capuccino,
    type: ['tradicional', 'com leite'],
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    count: 0,
    price: 9.9,
  },
  {
    id: '8',
    img: Macchiato,
    type: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    count: 0,
    price: 9.9,
  },
  {
    id: '9',
    img: Mocaccino,
    type: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    count: 0,
    price: 9.9,
  },
  {
    id: '10',
    img: ChocolateQuente,
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    count: 0,
    price: 9.9,
  },
  {
    id: '11',
    img: Cubano,
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    count: 0,
    price: 9.9,
  },
  {
    id: '12',
    img: Havaiano,
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    count: 0,
    price: 9.9,
  },
  {
    id: '13',
    img: Arabe,
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    count: 0,
    price: 9.9,
  },
  {
    id: '14',
    img: Irlandes,
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    count: 0,
    price: 9.9,
  },
]

export const ProductsContext = createContext({} as ProductContextType)

export const ProductsContextProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ICardCoffee[]>([])
  const [countHeader, setCountHeader] = useState<number>(0)

  useEffect(() => {}, [countHeader])

  const handlePlusClick = (cardId: number) => {
    setCountHeader(countHeader + 1)
    setProducts((prevSelectedCards) => {
      // Verifica se o cardId já está presente nos produtos selecionados
      const isCardAlreadySelected = prevSelectedCards.some(
        (product) => product.id === cardId
      )

      if (isCardAlreadySelected) {
        // Se o cardId já está na lista, aumenta o contador desse produto
        return prevSelectedCards.map((product) => {
          if (product.id === cardId) {
            const updatedCount = Math.max(0, product.count + 1)
            return { ...product, count: updatedCount }
          }
          return product
        })
      } else {
        // Se o cardId não estiver na lista, tenta encontrá-lo no array menuCoffee
        const findProduct = menuCoffee.find((product) => product.id === cardId)
        if (findProduct) {
          // Se o produto for encontrado, adiciona-o à lista de produtos selecionados com um contador inicial de 1
          return [...prevSelectedCards, { ...findProduct, count: 1 }]
        }
      }

      // Retorna a lista não modificada se o cardId não for encontrado em nenhum lugar
      return prevSelectedCards
    })
  }

  const handlePlusDelete = (cardId: number) => {
    if (countHeader > 0) {
      setCountHeader(countHeader - 1)
    }
    setProducts((prevSelectedCards) => {
      const updatedSelectedCards = prevSelectedCards.map((product) => {
        if (product.id === cardId) {
          // Se o cardId corresponder ao item que estamos removendo, decremente o count
          const updatedCount = Math.max(0, product.count - 1)
          return { ...product, count: updatedCount }
        }
        return product
      })

      // Use o filter para remover itens com count igual a zero
      const filteredSelectedCards = updatedSelectedCards.filter(
        (product) => product.count > 0
      )

      return filteredSelectedCards
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        countHeader,
        products,
        setProducts,
        menuCoffee,
        handlePlusClick,
        handlePlusDelete,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
