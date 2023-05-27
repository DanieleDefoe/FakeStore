import { useEffect } from 'react'

export default function ChosenCard({
  image,
  title,
  price,
  removeChosenCard,
  id,
  amount,
  incrementAmount,
  decrementAmount,
  increaseTotalPrice,
  decreaseTotalPrice,
}) {
  useEffect(() => {
    if (amount < 1) {
      removeChosenCard(id)
    }
  }, [amount])

  return (
    <article className="w-full p-5 rounded-2xl chosen-card shadow-2xl bg-white flex gap-8 relative">
      <img src={image} className="w-full max-w-[150px] block object-contain" />
      <div className="flex flex-col justify-center gap-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl">$ {price}</p>
        <div className="flex flex-wrap items-center gap-5">
          <button
            className="minus w-10 h-10 hover:opacity-75 transition-opacity duration-300"
            onClick={() => {
              decrementAmount(id)
              decreaseTotalPrice(Number(price))
            }}
          ></button>
          <p className="">{amount}</p>
          <button
            className="plus w-12 h-12 hover:opacity-75 transition-opacity duration-300"
            onClick={() => {
              incrementAmount(id)
              increaseTotalPrice(Number(price))
            }}
          ></button>
        </div>
      </div>
      <button
        className="delete absolute top-2 right-2 w-7 h-7 hover:opacity-75 transition-opacity duration-300"
        onClick={() => {
          removeChosenCard(id)
          decreaseTotalPrice(Number(price) * amount)
        }}
      ></button>
      <p className="text-xl font-bold absolute right-4 bottom-3">
        $ {(Number(price) * amount).toFixed(2)}
      </p>
    </article>
  )
}
