import { ArrowRight, Clock3, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { classModeLabels, type ClassItem } from '../data/siteData'

const toneStyles = {
  rose: 'from-[#ffd9ff] via-[#fffaff] to-[#f5e8e8]',
  pearl: 'from-[#ffdede] via-[#fff9fc] to-[#f5e8e8]',
  sand: 'from-[#f5e8e8] via-white to-[#fff8fb]',
  mauve: 'from-[#ffe8f6] via-white to-[#fff2f2]',
}

export default function ClassCard({ course }: { course: ClassItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className={`rounded-[24px] bg-gradient-to-br ${toneStyles[course.tone]} p-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">
            {classModeLabels[course.mode]}
          </span>
          <span className="text-sm font-semibold text-ink/55">{course.rating}</span>
        </div>
        <h3 className="mt-6 text-3xl font-semibold leading-tight">{course.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {course.focusItems.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/80 bg-white/78 px-3 py-1 text-xs font-semibold text-ink/70"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 max-w-md text-sm leading-6 text-ink/70">{course.shortDescription}</p>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="grid gap-3 text-sm text-ink/65 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-ink/45" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-ink/45" />
            <span>{course.cohortSize}</span>
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <MapPin className="h-4 w-4 text-ink/45" />
            <span>{course.location}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Starting at</p>
            <p className="mt-1 text-2xl font-semibold text-ink">{course.price}</p>
          </div>
          <Link to={`/classes/${course.slug}`} className="btn-secondary">
            View details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
