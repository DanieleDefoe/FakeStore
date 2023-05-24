import Card from '../components/Card'
import cardsData from '../utils/cardsData'
import { useOutletContext } from 'react-router-dom'

export default function Products() {
  const { addCardToCart, increaseTotalPrice } = useOutletContext()
  const cardsElements = cardsData.map(({ id, image, title, price }) => (
    <Card
      key={id}
      image={image}
      title={title}
      price={price}
      id={id}
      addCardToCart={addCardToCart}
      increaseTotalPrice={increaseTotalPrice}
    />
  ))
  return (
    <section className="grid product-grid w-full max-w-[1280px] mx-auto gap-8">
      {cardsElements}
    </section>
  )
}
