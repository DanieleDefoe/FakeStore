import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-10">
      <h1 className="font-bold text-3xl">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/FakeStore/"
        className="w-full px-5 py-4 text-2xl font-bold text-green-300 bg-gray-900 rounded-lg hover:cursor-pointer hover:opacity-75 transition-opacity duration-300 max-w-[500px] text-center"
      >
        Return back to home
      </Link>
    </section>
  )
}
