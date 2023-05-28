import fashion from '../assets/fashion.png'
import love from '../assets/love.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="w-full h-full flex items-center justify-center home">
      <div className="left w-full max-w-[600px] flex flex-col gap-5">
        <h2 className="uppercase text-gray-700 text-2xl font-bold">
          best online store of the year
        </h2>
        <h1 className="text-7xl font-extrabold title">
          We don't do fashion, we are fashion{' '}
          <img src={love} width={50} className="inline-block" />
        </h1>
        <Link
          to="products"
          className="bg-gray-900 block text-white text-center font-bold w-full max-w-[250px] text-4xl py-6 rounded-3xl hover:cursor-pointer hover:opacity-75 transition-opacity duration-300 shadow-2xl"
        >
          Shop now
        </Link>
      </div>
      <div className="right w-full max-w-[750px]">
        <img src={fashion} width="100%" className="rounded-[30px] shadow-2xl" />
      </div>
    </section>
  )
}
