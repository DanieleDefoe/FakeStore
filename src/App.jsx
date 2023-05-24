import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
    </Route>,
  ),
)

export default function App() {
  return <RouterProvider router={router} />
}
