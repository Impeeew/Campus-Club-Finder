import { Link } from 'react-router'

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors'

const variants = {
  primary: 'bg-ink text-white hover:bg-brand',
  secondary: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
}

export default function ButtonLink({ to, variant = 'primary', children }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  )
}
