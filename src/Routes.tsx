import { Routes, Route } from 'react-router-dom'

import { DefaultLayots } from './pages/layouts/DefaultLayouts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayots />}></Route>
    </Routes>
  )
}
