import { ArrowRight, Calendar, CheckCircle2, Clock3, MapPin, PlayCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ClassCard from '../components/ClassCard'
import PageHero from '../components/PageHero'
import { useAuth } from '../context/AuthContext'
import { classes, classModeLabels } from '../data/siteData'

export default function ClassDetail() {
  const { slug } = useParams()
  const { user } = useAuth()
  const course = classes.find((item) => item.slug === slug)

  if (!course) {
    return (
      <section className="shell section-space">
        <div className="card-surface px-6 py-12 text-center sm:px-10">
          <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Class not found</p>
          <h1 className="mt-4 text-4xl font-semibold">That class is not in the current catalogue.</h1>
          <Link to="/classes" className="btn-primary mt-8">
            Back to classes
          </Link>
        </div>
      </section>
    )
  }

  const relatedClasses = classes.filter((item) => item.slug !== course.slug).slice(0, 3)
  const primaryDestination = user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/login'

  return (
    <>
      <PageHero
        eyebrow={classModeLabels[course.mode]}
        title={course.title}
        description={course.description}
        actions={
          <>
            <Link to={primaryDestination} className="btn-primary">
              {user ? 'Go to dashboard' : 'Login to continue'}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/classes" className="btn-secondary">
              Back to catalogue
            </Link>
          </>
        }
        aside={
          <div className="card-surface p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Class snapshot</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blush/35 bg-mist px-3 py-1 text-xs font-semibold text-ink/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-4 text-sm text-ink/68">
              <div className="flex items-center justify-between border-b border-blush/20 pb-4">
                <span>Price</span>
                <span className="text-lg font-semibold text-ink">{course.price}</span>
              </div>
              <div className="flex items-center justify-between border-b border-blush/20 pb-4">
                <span>Next start</span>
                <span className="font-semibold text-ink">{course.nextStart}</span>
              </div>
              <div className="flex items-center justify-between border-b border-blush/20 pb-4">
                <span>Mentor</span>
                <span className="font-semibold text-ink">{course.mentor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cohort</span>
                <span className="font-semibold text-ink">{course.cohortSize}</span>
              </div>
            </div>
          </div>
        }
      />

      <section className="shell section-space">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">On the bake menu</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {course.focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blush/35 bg-mist px-4 py-2 text-sm font-semibold text-ink/72"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {course.learnings.map((item) => (
                <div key={item} className="flex gap-3 rounded-[22px] bg-mist p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink/60" />
                  <p className="text-sm leading-7 text-ink/72">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Class details</h2>
              <div className="mt-6 space-y-4 text-sm text-ink/68">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-ink/45" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-ink/45" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-ink/45" />
                  <span>{course.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-4 w-4 text-ink/45" />
                  <span>{classModeLabels[course.mode]}</span>
                </div>
              </div>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Included in the class</h2>
              <div className="mt-6 space-y-3">
                {course.includes.map((item) => (
                  <div key={item} className="rounded-[20px] bg-mist px-4 py-3 text-sm text-ink/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">You may also like</p>
            <h2 className="mt-3 text-4xl font-semibold">More classes in the same premium catalogue.</h2>
          </div>
          <Link to="/classes" className="btn-secondary">
            Browse all classes
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relatedClasses.map((item) => (
            <ClassCard key={item.id} course={item} />
          ))}
        </div>
      </section>
    </>
  )
}
