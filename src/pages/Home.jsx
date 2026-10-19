import ButtonLink from '../components/ButtonLink.jsx'

export default function Home() {
  return (
    <section className="grid items-center gap-8 overflow-hidden rounded-3xl bg-sun p-6 sm:p-10 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Welcome to Campus Club Finder
        </h1>
        <p className="max-w-md text-lg">
          Discover student clubs, learn what they do, and join the ones you like.
        </p>
        <ButtonLink to="/clubs">Browse clubs</ButtonLink>
      </div>
      <img
        src="/images/hero.svg"
        alt="Colorful club posters pinned to a notice board"
        className="w-full rounded-2xl"
      />
    </section>
  )
}
