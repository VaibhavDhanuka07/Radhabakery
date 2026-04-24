import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  aside?: ReactNode
}

export default function PageHero({ eyebrow, title, description, actions, aside }: PageHeroProps) {
  return (
    <section className="shell pt-8 sm:pt-10">
      <div className="card-surface overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <div className={`grid gap-8 ${aside ? 'lg:grid-cols-[1.15fr_0.85fr] lg:items-center' : ''}`}>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/72 sm:text-lg">{description}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </div>
    </section>
  )
}
