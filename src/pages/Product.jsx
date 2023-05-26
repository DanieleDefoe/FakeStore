import { useParams, useOutletContext, Link } from 'react-router-dom'
import cardsData from '../utils/cardsData'

export default function Product() {
  const { id } = useParams()
  console.log(id)
  const { addCardToCart, increaseTotalPrice } = useOutletContext()
  const clickedCard = cardsData.find((card) => card.id === id)
  const { image, title, price } = clickedCard
  return (
    <article className="max-w-[1280px] mx-auto flex flex-col items-start gap-[30px]">
      <Link
        to=".."
        relative="path"
        className="bg-gray-900 text-green-300 p-3 rounded-lg block hover:opacity-75 transition-opacity duration-300"
      >
        &larr; Back to all products
      </Link>
      <div className="w-full flex gap-10 bg-white p-[30px] rounded-3xl shadow-2xl product">
        <div className="w-full min-w-[300px] max-w-[700px] product-image-holder">
          <img src={image} className="w-full object-contain" />
        </div>
        <section className="flex flex-col gap-6">
          <h3 className="font-bold text-3xl">{title}</h3>
          <p className="text-4xl">${price}</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            impedit hic nam earum provident cum ratione. Laborum atque vel
            possimus quas maxime ab provident voluptates natus perspiciatis
            obcaecati? Blanditiis illo sint culpa, quibusdam minima asperiores?
            Officiis aperiam, omnis architecto quod iusto voluptatum soluta
            quasi nobis dolorum eveniet reprehenderit in animi possimus! Quae
            nostrum aspernatur natus dolorum excepturi, corporis dolorem
            quibusdam iusto saepe possimus voluptates placeat sunt
            necessitatibus temporibus eius debitis consequatur eos, quisquam
            asperiores. Quae natus atque harum mollitia rem ipsam illo error
            sequi porro inventore corrupti dignissimos consequatur alias ipsa
            tenetur quibusdam, similique, quam sapiente nesciunt. Labore, facere
            expedita!
          </p>
          <button
            className="w-full px-5 py-4 text-2xl font-bold text-green-300 bg-gray-900 rounded-lg hover:cursor-pointer hover:opacity-75 transition-opacity duration-300"
            onClick={() => {
              addCardToCart(image, title, price, id)
              increaseTotalPrice(Number(price))
            }}
          >
            Add to cart
          </button>
        </section>
      </div>
    </article>
  )
}
