import { BookOpen, Sparkles, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { milestones } from '../data/siteData'

const values = [
  {
    icon: Sparkles,
    title: 'Elegant simplicity',
    description: 'Premium does not need to feel complicated. We keep every lesson clean, calm, and welcoming.',
  },
  {
    icon: BookOpen,
    title: 'Reliable learning',
    description: 'Recipes, methods, and schedules are arranged so students can revisit them with confidence at home.',
  },
  {
    icon: Users,
    title: 'Human guidance',
    description: 'The classroom experience is warm, patient, and supportive for beginners and returning learners alike.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A bakery classroom shaped by small batches, sweet detail, and steady teaching since 2009."
        description="What began with home-style cake classes grew into a warm bakery studio for pastries, cheesecakes, cookies, and celebration bakes."
        aside={
          <div className="card-surface p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Founder note</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Cakes', 'Pastries', 'Cheesecakes'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blush/30 bg-mist px-3 py-1 text-xs font-semibold text-ink/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              "Great bakery classes should feel easy for beginners and beautiful enough to inspire every batch."
            </p>
            <p className="mt-5 font-semibold text-ink">Radha Patel</p>
            <p className="text-sm text-ink/55">Founder and lead mentor</p>
          </div>
        }
      />

      <section className="shell section-space">
        <SectionIntro
          eyebrow="Since 2009"
          title="From home batches to a bakery-first studio."
          description="A soft journey through cakes, pastries, and sweet learning."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="card-surface p-6 sm:p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-ink/45">{milestone.year}</p>
              <h3 className="mt-4 text-3xl font-semibold">{milestone.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/68">{milestone.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <SectionIntro
          eyebrow="What matters here"
          title="The teaching style stays simple."
          description="Warm guidance, pretty bakes, and clear steps."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card-surface p-6 sm:p-7">
              <value.icon className="h-8 w-8 text-blush" />
              <h3 className="mt-5 text-2xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/68">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
