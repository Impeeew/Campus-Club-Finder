import { Link } from 'react-router'

export default function ClubCard({ club, view }) {
  const isList = view === 'list'

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-ink/10 bg-white ${
        isList ? 'flex flex-col sm:flex-row' : 'flex flex-col'
      }`}
    >
      <img
        src={club.image}
        alt={`Illustration for ${club.name}`}
        loading="lazy"
        className={`object-cover ${
          isList ? 'aspect-[8/5] w-full sm:aspect-auto sm:w-64 sm:shrink-0' : 'aspect-[8/5] w-full'
        }`}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-xl font-bold">{club.name}</h2>
        <p className="text-ink/80">{club.shortDescription}</p>
        <div className="mt-auto pt-2">
          <Link
            to={`/clubs/${club.id}`}
            className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            View Details
            <span className="sr-only">: {club.name}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
