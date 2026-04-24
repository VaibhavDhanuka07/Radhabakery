import DashboardStat from '../components/DashboardStat'
import PageHero from '../components/PageHero'
import { useAuth } from '../context/AuthContext'
import { adminBatches, adminMetrics, recentEnrollments } from '../data/siteData'

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <>
      <PageHero
        eyebrow="Admin dashboard"
        title={`Hello, ${user?.name || 'Admin'}.`}
        description="A protected preview for class management, batch visibility, and enrollment reporting. Everything here uses dummy data and no backend logic yet."
      />

      <section className="shell section-space">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {adminMetrics.map((item) => (
            <DashboardStat key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">Upcoming batches</h2>
            <div className="mt-6 space-y-4">
              {adminBatches.map((batch) => (
                <div key={batch.title} className="rounded-[24px] bg-mist p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-ink">{batch.title}</p>
                      <p className="mt-2 text-sm text-ink/65">Mentor: {batch.mentor}</p>
                    </div>
                    <div className="text-sm text-ink/60 sm:text-right">
                      <p>{batch.seats}</p>
                      <p className="mt-2 font-semibold text-ink/75">{batch.start}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Recent enrollments</h2>
              <div className="mt-6 space-y-4">
                {recentEnrollments.map((item) => (
                  <div key={`${item.name}-${item.className}`} className="rounded-[22px] bg-mist p-4">
                    <p className="font-semibold text-ink">{item.name}</p>
                    <p className="mt-2 text-sm text-ink/65">{item.className}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-ink/45">{item.channel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Admin note</h2>
              <p className="mt-4 text-sm leading-7 text-ink/65">
                This layout is ready for real CRUD actions later, including publishing classes, reviewing enrollments, and monitoring revenue once a backend is introduced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
