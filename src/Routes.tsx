import { Routes, Route } from 'react-router-dom'

import { DefaultLayots } from './pages/layouts/DefaultLayouts'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout/Checkout'
import { CheckoutCompleted } from './pages/CheckoutCompleted'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayots />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<CheckoutCompleted />} />
      </Route>
    </Routes>
  )
}
