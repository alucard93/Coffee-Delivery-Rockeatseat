import { Routes, Route } from 'react-router-dom'

import { DefaultLayots } from './pages/layouts/DefaultLayouts'
import { Home } from './pages/Home/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayots />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
