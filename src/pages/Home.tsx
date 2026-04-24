import {
  CakeSlice,
  Cookie,
  Croissant,
  CupSoda,
  Dessert,
  Donut,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ClassCard from '../components/ClassCard'
import SectionIntro from '../components/SectionIntro'
import TestimonialCard from '../components/TestimonialCard'
import { classes, testimonials } from '../data/siteData'

const bakeryCategories = [
  {
    icon: CakeSlice,
    title: 'Whole Cakes',
    description: 'Soft layers, celebration cakes, and bakery-style finishes.',
  },
  {
    icon: Croissant,
    title: 'Pastries',
    description: 'Flaky pastries, tarts, puffs, and sweet cafe bakes.',
  },
  {
    icon: Dessert,
    title: 'Cheesecakes',
    description: 'Baked, chilled, creamy, and beautifully topped slices.',
  },
  {
    icon: Cookie,
    title: 'Cookies & Bars',
    description: 'Cookies, brownies, bars, and tea-time sweet favourites.',
  },
  {
    icon: CupSoda,
    title: 'Shakes & Desserts',
    description: 'Thick shakes, cold desserts, jars, and cafe-style treats.',
  },
  {
    icon: Donut,
    title: 'Seasonal Treats',
    description: 'Sweet specials for birthdays, gifting, and family occasions.',
  },
]

const heroImage =
  'https://images.unsplash.com/photo-1578775887804-699de7086ff9?auto=format&fit=crop&w=1600&q=80'

const occasionNotes = [
  'Birthdays and celebration cakes',
  'Tea-time pastries and cookies',
  'Cheesecakes for gifting',
  'Weekend bakery hobby classes',
]

const giftingIdeas = ['Gift boxes', 'Dessert tables', 'Party orders', 'Private batches']

export default function Home() {
  const featuredClasses = classes.filter((course) => course.spotlight)

  return (
    <>
      <section className="shell pt-8 sm:pt-10 lg:pb-14">
        <div className="overflow-hidden rounded-[36px] border border-white/80 shadow-soft lg:grid lg:grid-cols-[0.98fr_1.02fr]">
          <div className="bg-blush/85 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-20">
            <span className="inline-flex rounded-sm bg-white px-3 py-1 text-sm font-bold text-ink shadow-soft">
              New
            </span>
            <h1 className="mt-10 max-w-2xl font-heading text-5xl leading-[0.9] text-[#6a2539] sm:text-6xl lg:text-[4.9rem]">
              Say Cheese(cake)
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/80 sm:text-[1.45rem]">
              Satisfy your sweet tooth with our rich and creamy cheesecakes.
            </p>

            <div className="mt-10">
              <Link
                to="/classes"
                className="inline-flex items-center justify-center rounded-full bg-[#6a2539] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#5b1f31]"
              >
                Explore All
              </Link>
            </div>
          </div>

          <div className="relative min-h-[22rem] bg-butter sm:min-h-[28rem] lg:min-h-[42rem]">
            <img
              src={heroImage}
              alt="Mini cheesecakes on pastel plates"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="shell section-space">
        <SectionIntro
          eyebrow="Our bakery delicacies"
          title="What you can bake and learn here."
          description="A bakery-first class menu inspired by classic sweet-shop favourites."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bakeryCategories.map((item) => (
            <div key={item.title} className="card-surface p-6 sm:p-7">
              <item.icon className="h-8 w-8 text-ink/65" />
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(135deg,rgba(245,232,232,0.95),rgba(255,199,255,0.18))] px-6 py-8 shadow-soft sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">For every occasion</span>
              <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
                Sweet classes for birthdays, gifting, tea-time, and celebrations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
                Inspired by classic bakery storytelling, but designed for your class website.
              </p>
              <div className="mt-6 space-y-3">
                {occasionNotes.map((item) => (
                  <div key={item} className="rounded-[22px] bg-white/85 px-4 py-3 text-sm font-semibold text-ink/72 shadow-soft">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {giftingIdeas.map((item) => (
                <div key={item} className="rounded-[26px] bg-white/88 p-5 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-ink/45">Sweet idea</p>
                  <p className="mt-4 text-2xl font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <SectionIntro
          eyebrow="Trending sweet classes"
          title="Popular bakery classes right now."
          description="Beautiful bakery classes for sweet treats and celebration bakes."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredClasses.map((course) => (
            <ClassCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <SectionIntro
          eyebrow="A little love from our learners"
          title="Happy bakery learners."
          description="Short, sweet, and full of good bakes."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} item={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}
