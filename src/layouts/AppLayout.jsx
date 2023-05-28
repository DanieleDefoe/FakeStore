import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function AppLayout() {
  const [chosenCards, setChosenCards] = useState(
    () => JSON.parse(localStorage.getItem('chosenCards')) || [],
  )
  const [totalPrice, setTotalPrice] = useState(
    () => JSON.parse(localStorage.getItem('totalPrice')) || 0,
  )

  localStorage.setItem('chosenCards', JSON.stringify(chosenCards))
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice))

  function addCardToCart(image, title, price, id) {
    setChosenCards((prevChosenCards) => {
      if (prevChosenCards.filter((card) => card.id === id).length > 0) {
        return prevChosenCards.map((card) =>
          card.id === id ? { ...card, amount: card.amount + 1 } : card,
        )
      }
      return [{ image, title, price, id, amount: 1 }, ...prevChosenCards]
    })
  }

  function removeChosenCard(id) {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.filter((card) => card.id !== id),
    )
  }

  function incrementAmount(id) {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.map((card) =>
        card.id === id ? { ...card, amount: card.amount + 1 } : card,
      ),
    )
  }

  function decrementAmount(id) {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.map((card) =>
        card.id === id ? { ...card, amount: card.amount - 1 } : card,
      ),
    )
  }

  function increaseTotalPrice(price) {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price)
  }

  function decreaseTotalPrice(price) {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - price)
  }

  return (
    <>
      <Header chosenCardsLength={chosenCards.length} />
      <Main>
        <Outlet
          context={{
            chosenCards,
            addCardToCart,
            removeChosenCard,
            incrementAmount,
            decrementAmount,
            totalPrice,
            setTotalPrice,
            increaseTotalPrice,
            decreaseTotalPrice,
          }}
        />
      </Main>
      <Footer />
    </>
  )
}
