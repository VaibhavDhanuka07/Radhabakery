import DashboardStat from '../components/DashboardStat'
import PageHero from '../components/PageHero'
import { useAuth } from '../context/AuthContext'
import { upcomingSessions, userEnrollments, userStats } from '../data/siteData'

export default function UserDashboard() {
  const { user } = useAuth()

  return (
    <>
      <PageHero
        eyebrow="Student dashboard"
        title={`Welcome back, ${user?.name || 'Student'}.`}
        description="This protected demo dashboard helps students keep track of progress, upcoming sessions, and current learning momentum."
      />

      <section className="shell section-space">
        <div className="grid gap-6 md:grid-cols-3">
          {userStats.map((item) => (
            <DashboardStat key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">Your enrolled classes</h2>
            <div className="mt-6 space-y-5">
              {userEnrollments.map((item) => (
                <div key={item.title} className="rounded-[24px] bg-mist p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-ink">{item.title}</p>
                      <p className="mt-2 text-sm text-ink/65">{item.nextStep}</p>
                    </div>
                    <p className="text-sm font-semibold text-ink/55">{item.progress}% complete</p>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-blush" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Upcoming sessions</h2>
              <div className="mt-6 space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={`${session.date}-${session.title}`} className="rounded-[24px] bg-mist p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-[18px] bg-white px-4 py-3 text-center shadow-soft">
                        <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{session.day}</p>
                        <p className="mt-1 text-lg font-semibold text-ink">{session.date}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-ink">{session.title}</p>
                        <p className="mt-2 text-sm text-ink/60">{session.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">Notes</h2>
              <p className="mt-4 text-sm leading-7 text-ink/65">
                This is dummy frontend data, but the structure is ready for real student progress, enrolled classes, downloadable resources, and profile tools later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
