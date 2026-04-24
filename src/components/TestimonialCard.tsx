import { Quote } from 'lucide-react'
import type { Testimonial } from '../data/siteData'

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="card-surface h-full p-6 sm:p-7">
      <Quote className="h-8 w-8 text-blush" />
      <p className="mt-5 text-base leading-7 text-ink/75">"{item.quote}"</p>
      <div className="mt-6">
        <p className="font-semibold text-ink">{item.name}</p>
        <p className="text-sm text-ink/55">{item.role}</p>
      </div>
    </article>
  )
}
