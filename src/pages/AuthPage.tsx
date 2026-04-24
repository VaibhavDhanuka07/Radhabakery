import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { UserRole } from '../data/siteData'

type AuthMode = 'login' | 'signup'

interface AuthPageProps {
  initialMode: AuthMode
}

interface LocationStateShape {
  from?: {
    pathname?: string
  }
}

function formatName(value: string) {
  return value
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')
}

export default function AuthPage({ initialMode }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [role, setRole] = useState<UserRole>('student')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  const location = useLocation()
  const { user, login } = useAuth()

  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  if (user) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/dashboard'} replace />
  }

  const redirectState = location.state as LocationStateShape | null

  function completeAuth(nextRole: UserRole, preset?: { name: string; email: string }) {
    const rawName = preset?.name || form.name || form.email.split('@')[0] || 'Student'
    const destination =
      nextRole === 'admin'
        ? redirectState?.from?.pathname || '/admin'
        : redirectState?.from?.pathname && redirectState.from.pathname !== '/admin'
          ? redirectState.from.pathname
          : '/dashboard'

    login({
      name: formatName(rawName),
      email: preset?.email || form.email,
      role: nextRole,
    })

    navigate(destination, { replace: true })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    completeAuth(role)
  }

  return (
    <section className="shell section-space">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-surface p-6 sm:p-8 lg:p-10">
          <span className="eyebrow">Frontend-only access</span>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">A soft, premium login experience without backend setup yet.</h1>
          <p className="mt-5 text-base leading-7 text-ink/72">
            This demo stores a temporary user session in local storage so you can preview protected routes, the student dashboard, and the admin dashboard right away.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-[24px] bg-mist p-5">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 h-5 w-5 text-ink/55" />
                <div>
                  <p className="font-semibold text-ink">Student preview</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    See enrolled classes, progress, and upcoming sessions.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] bg-mist p-5">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-ink/55" />
                <div>
                  <p className="font-semibold text-ink">Admin preview</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Review dummy metrics, batch status, and recent enrollments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => completeAuth('student', { name: 'Preview Student', email: 'student@radhacooking.com' })}
              className="btn-secondary"
            >
              Continue as student
            </button>
            <button
              type="button"
              onClick={() => completeAuth('admin', { name: 'Preview Admin', email: 'admin@radhacooking.com' })}
              className="btn-secondary"
            >
              Continue as admin
            </button>
          </div>
        </div>

        <div className="card-surface p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Account access</p>
              <h2 className="mt-3 text-3xl font-semibold">{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
            </div>
            <div className="rounded-full bg-mist p-1">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-white text-ink shadow-soft' : 'text-ink/60'}`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'signup' ? 'bg-white text-ink shadow-soft' : 'text-ink/60'}`}
              >
                Signup
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {mode === 'signup' ? (
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-ink/70">Full name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                  className="input-base"
                  required
                />
              </label>
            ) : null}

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink/70">Email address</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="name@example.com"
                className="input-base"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink/70">Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                placeholder="Enter any password"
                className="input-base"
                required
              />
            </label>

            <div className="pt-2">
              <p className="mb-3 text-sm font-semibold text-ink/70">Choose preview role</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${role === 'student' ? 'bg-ink text-white shadow-soft' : 'border border-ink/10 bg-white text-ink/70'}`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${role === 'admin' ? 'bg-ink text-white shadow-soft' : 'border border-ink/10 bg-white text-ink/70'}`}
                >
                  Admin
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              {mode === 'login' ? 'Continue to dashboard' : 'Create demo account'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-sm leading-6 text-ink/60">
            Want the other screen?{' '}
            <Link to={mode === 'login' ? '/signup' : '/login'} className="font-semibold text-ink">
              Open the {mode === 'login' ? 'signup' : 'login'} route
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
