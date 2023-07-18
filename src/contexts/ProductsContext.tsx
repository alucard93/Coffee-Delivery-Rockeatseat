import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
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
}

interface ProductContextType {
  products: ICardCoffee[]
  setProducts: Dispatch<SetStateAction<ICardCoffee[]>>
  menuCoffee: ICardCoffee[]
  handlePlusClick: (id: string) => void
}

const menuCoffee = [
  {
    id: '1',
    img: Express,
    type: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: '2',
    img: Americano,
    type: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: '3',
    img: Cremoso,
    type: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: '4',
    img: Gelado,
    type: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    id: '5',
    img: CafeComLeite,
    type: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: '6',
    img: Latte,
    type: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: '7',
    img: Capuccino,
    type: ['tradicional', 'com leite'],
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: '8',
    img: Macchiato,
    type: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    id: '9',
    img: Mocaccino,
    type: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    id: '10',
    img: ChocolateQuente,
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: '11',
    img: Cubano,
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: '12',
    img: Havaiano,
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    id: '13',
    img: Arabe,
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: '14',
    img: Irlandes,
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]

export const ProductsContext = createContext({} as ProductContextType)

export const ProductsContextProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ICardCoffee[]>([])

  const handlePlusClick = (cardId: string) => {
    const findProduct = menuCoffee.filter((product) => product.id === cardId)
    setProducts((prevSelectedCards) => [...prevSelectedCards, ...findProduct])
  }

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, menuCoffee, handlePlusClick }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
