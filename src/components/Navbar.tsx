import { useEffect, useState } from 'react'
import { ArrowRight, CircleHelp, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/classes', label: 'Classes' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const { user, logout } = useAuth()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const dashboardLink = user?.role === 'admin' ? '/admin' : '/dashboard'
  const dashboardLabel = user?.role === 'admin' ? 'Admin' : 'Dashboard'

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/80 bg-white/84 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petal/70 font-heading text-lg font-semibold text-ink">
                RC
              </div>
              <div className="min-w-0">
                <p className="truncate font-heading text-xl font-semibold text-ink sm:text-2xl">
                  Radha Cooking & Bakery
                </p>
                <p className="truncate text-xs uppercase tracking-[0.26em] text-ink/55">
                  Cakes, Pastries, Cheesecakes
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {primaryLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    joinClasses(
                      'rounded-full px-4 py-2 text-sm font-semibold transition duration-300',
                      isActive ? 'bg-petal/55 text-ink' : 'text-ink/70 hover:bg-mist hover:text-ink',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:bg-mist"
                aria-label="Help"
              >
                <CircleHelp className="h-5 w-5" />
              </button>
              {user ? (
                <>
                  <Link to={dashboardLink} className="btn-secondary">
                    {dashboardLabel}
                  </Link>
                  <button type="button" onClick={logout} className="btn-ghost">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn-primary">
                  Login / Signup
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blush/30 bg-white/85 text-ink lg:hidden"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen ? (
            <div className="mt-4 rounded-[24px] border border-white/80 bg-canvas/95 p-4 lg:hidden">
              <nav className="flex flex-col gap-2">
                {primaryLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      joinClasses(
                        'rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300',
                        isActive ? 'bg-petal/55 text-ink' : 'text-ink/70 hover:bg-white hover:text-ink',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                {user ? (
                  <>
                    <Link to={dashboardLink} className="btn-secondary mt-2">
                      {dashboardLabel}
                    </Link>
                    <button type="button" onClick={logout} className="btn-ghost justify-start px-4 py-3">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="btn-primary mt-2">
                    Login / Signup
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
