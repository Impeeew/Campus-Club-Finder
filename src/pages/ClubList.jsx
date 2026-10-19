import { useState } from 'react'
import { clubs } from '../data/clubs.js'
import ClubCard from '../components/ClubCard.jsx'
import SortSelect from '../components/SortSelect.jsx'
import ViewToggle from '../components/ViewToggle.jsx'

export default function ClubList() {
  const [sort, setSort] = useState('name-asc')
  const [view, setView] = useState('grid')

  const sortedClubs = [...clubs].sort((a, b) =>
    sort === 'name-asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  )

  return (
    <>
      <h1 className="text-3xl font-extrabold sm:text-4xl">Student clubs</h1>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <SortSelect value={sort} onChange={setSort} />
        <ViewToggle value={view} onChange={setView} />
      </div>

      <ul
        className={`mt-6 ${
          view === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'
        }`}
      >
        {sortedClubs.map((club) => (
          <li key={club.id} className="flex flex-col [&>article]:flex-1">
            <ClubCard club={club} view={view} />
          </li>
        ))}
      </ul>
    </>
  )
}
