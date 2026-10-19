import { Link, NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/clubs', label: 'Clubs' },
  { to: '/about', label: 'About' },
]

const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    isActive ? 'bg-ink text-white' : 'text-ink hover:bg-ink/10'
  }`

export default function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-ink">
            <span className="size-3.5 rounded-full border-[3px] border-sun" />
          </span>
          Binusian Club Finder 
        </Link>
        <ul className="flex items-center gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
