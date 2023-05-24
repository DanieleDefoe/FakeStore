import { Link, NavLink } from 'react-router-dom'

export default function Header({ chosenCardsLength }) {
  const activeLink = {
    color: 'rgb(134 239 172)',
    textDecoration: 'underline',
  }

  function setActiveStyle({ isActive }) {
    return isActive ? activeLink : null
  }

  return (
    <header className="w-full min-h-[160px] bg-gray-900 flex items-center justify-around px-5 py-4">
      <h1 className="text-green-300 text-7xl font-black">
        <Link to="/FakeStore/">FakeStore</Link>
      </h1>
      <nav>
        <ul className="flex items-center justify-center gap-16 text-white text-2xl">
          <li className="hover:text-green-300 transition-colors">
            <NavLink to="/FakeStore/" style={setActiveStyle}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-green-300 transition-colors">
            <NavLink to="products" style={setActiveStyle}>
              Products
            </NavLink>
          </li>
          <li className="hover:text-green-300 transition-colors">
            <NavLink to="contact" style={setActiveStyle}>
              Contact
            </NavLink>
          </li>
          <li className="hover:opacity-75 transition-opacity duration-300 relative">
            <NavLink
              to="cart"
              className="cart block w-12 h-12"
              aria-label="cart"
            >
              {chosenCardsLength > 0 && (
                <p className="absolute bg-green-300 text-gray-900 bottom-[-15px] left-[-5px] w-7 h-7 text-center flex items-center justify-center p-2 rounded-[50%] font-bold">
                  {chosenCardsLength}
                </p>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
