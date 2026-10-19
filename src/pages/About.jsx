const stack = [
  { name: 'Vite', use: 'Project setup, dev server, and bundling' },
  { name: 'React', use: 'Functional components, hooks, and UI state' },
  { name: 'React Router', use: 'Page navigation and the /clubs/:clubId route' },
  { name: 'Tailwind CSS', use: 'All styling and the responsive layout' },
]

export default function About() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-extrabold sm:text-4xl">About Binusian Club Finder</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Binusian Club Finder is a small web app from the Student Affairs department. Students can
        browse the available clubs, read what each club does, check its upcoming events, and join
        with one click.
      </p>
      <p className="mt-3 text-lg leading-relaxed">
        There is no account and no server. The club list lives in a data file, and the clubs you
        join are saved in your browser&rsquo;s localStorage, so they stay after you reload the page.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Tech stack</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {stack.map((item) => (
          <li key={item.name} className="rounded-xl border border-ink/10 bg-white p-4">
            <p className="font-display text-lg font-bold">{item.name}</p>
            <p className="text-ink/80">{item.use}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
