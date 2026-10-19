import ButtonLink from '../components/ButtonLink.jsx'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-12 text-center">
      <p aria-hidden="true" className="font-display text-7xl font-extrabold text-brand">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold">We couldn&rsquo;t find that page</h1>
      <p className="mt-3 text-lg text-ink/80">
        The link may be broken, or the page may have moved. Head back home and try again.
      </p>
      <div className="mt-6">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </div>
  )
}
