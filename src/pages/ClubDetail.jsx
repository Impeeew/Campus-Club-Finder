import { useState } from 'react'
import { useParams } from 'react-router'
import { clubs } from '../data/clubs.js'
import useJoinedClubs from '../hooks/useJoinedClubs.js'
import { formatDate } from '../utils.js'
import NotFound from './NotFound.jsx'

export default function ClubDetail() {
  const { clubId } = useParams()
  const club = clubs.find((c) => c.id === clubId)
  const { isJoined, joinClub } = useJoinedClubs()
  const [confirmation, setConfirmation] = useState('')

  if (!club) return <NotFound />

  const joined = isJoined(club.id)

  const handleJoin = () => {
    joinClub(club.id)
    setConfirmation(`Welcome aboard! You joined ${club.name}.`)
  }

  return (
    <article>
      <img
        src={club.image}
        alt={`Illustration for ${club.name}`}
        className="aspect-8/5 max-h-112 w-full rounded-3xl object-cover"
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{club.name}</h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed">{club.description}</p>

          <h2 className="mt-8 text-2xl font-bold">Upcoming events</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {club.events.map((event) => (
              <li
                key={event.name}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3"
              >
                <span className="font-semibold">{event.name}</span>
                <time dateTime={event.date} className="text-ink/80">
                  {formatDate(event.date)}
                </time>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-fit">
          <button
            type="button"
            onClick={handleJoin}
            disabled={joined}
            className="w-full rounded-full bg-ink px-6 py-3 font-semibold text-white transition-colors enabled:hover:bg-brand disabled:cursor-not-allowed disabled:bg-ink/70"
          >
            {joined ? 'You have joined this club!' : 'Join Club'}
          </button>
          <p role="status" className="mt-3 font-semibold">
            {confirmation}
          </p>
        </div>
      </div>
    </article>
  )
}
