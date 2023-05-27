import { useOutletContext } from 'react-router-dom'
import ChosenCard from '../components/ChosenCard'

export default function Cart() {
  const {
    chosenCards,
    removeChosenCard,
    incrementAmount,
    decrementAmount,
    totalPrice,
    increaseTotalPrice,
    decreaseTotalPrice,
  } = useOutletContext()
  const chosenCardElements = chosenCards.map(
    ({ id, image, title, price, amount }) => (
      <li key={id}>
        <ChosenCard
          key={id}
          image={image}
          title={title}
          price={price}
          removeChosenCard={removeChosenCard}
          id={id}
          amount={amount}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          increaseTotalPrice={increaseTotalPrice}
          decreaseTotalPrice={decreaseTotalPrice}
        />
      </li>
    ),
  )

  return (
    <section className="w-full h-full max-w-[1280px] mx-auto flex gap-10 justify-between items-start cart-section">
      <ul className="flex flex-col gap-8 w-full max-w-[600px]">
        {chosenCardElements}
      </ul>
      <div className="w-full max-w-[600px] rounded-2xl flex bg-white flex-col items-center justify-center gap-5 shadow-2xl buy">
        <p className="uppercase text-2xl font-bold px-4 pt-5">
          total: $ {totalPrice.toFixed(2)}
        </p>
        <button className="capitalize bg-gray-900 w-full px-4 py-4 rounded-2xl text-green-300 text-2xl font-bold hover:opacity-75 transition-opacity duration-300">
          purchase
        </button>
      </div>
    </section>
  )
}
