import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="shell section-space">
      <div className="card-surface px-6 py-12 text-center sm:px-10">
        <span className="eyebrow">Page not found</span>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">This page has stepped out of the kitchen.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
          The link may have changed, or the page may not be ready yet. You can head back home or browse classes instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/classes" className="btn-secondary">
            Explore classes
          </Link>
        </div>
      </div>
    </section>
  )
}
