import { Link } from 'react-router-dom'

export default function Card({
  image,
  title,
  price,
  addCardToCart,
  id,
  increaseTotalPrice,
}) {
  return (
    <article className="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 shadow-2xl border border-gray-600 border-solid hover:cursor-pointer">
      <Link to={id}>
        <div className="w-full min-h-[250px] flex items-center justify-center">
          <img
            src={image}
            className="w-full max-w-[150px] block object-contain"
          />
        </div>
      </Link>
      <hr />
      <section className="flex flex-col gap-4">
        <Link to={id}>
          <h3 className="text-xl font-bold text-gray-900 min-h-[90px]">
            {title}
          </h3>
          <p className="text-xl">$ {price}</p>
        </Link>
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
    </article>
  )
}
