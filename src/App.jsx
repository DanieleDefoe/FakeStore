import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/FakeStore/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
)

export default function App() {
  return <RouterProvider router={router} />
}
