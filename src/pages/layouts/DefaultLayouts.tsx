import { Outlet } from 'react-router'
import { Header } from '../../componentes/Header/Header'

export const DefaultLayots = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
