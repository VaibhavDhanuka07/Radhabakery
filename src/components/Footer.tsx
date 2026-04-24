import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/80 bg-white/68">
      <div className="shell py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-heading text-3xl font-semibold text-ink">Radha Cooking & Bakery Classes</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink/70">
              Cakes, pastries, cheesecakes, shakes, cookies, and sweet bakery classes with a soft premium feel.
            </p>
            <div className="mt-5 space-y-3 text-sm text-ink/70">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-ink/55" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-ink/55" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ink/55" />
                <span>hello@radhacookingclasses.com</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ink/55">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/login">Login / Signup</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ink/55">Bakery Menu</p>
            <div className="mt-4 space-y-3 text-sm text-ink/70">
              <p>Cakes and celebration bakes</p>
              <p>Pastries, cheesecakes, and dessert jars</p>
              <p>Shakes, cookies, brownies, and tea treats</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-petal/25 pt-6 text-sm text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Radha Cooking & Bakery Classes. Frontend demo only.</p>
          <p>Soft pink bakery styling with dummy data only.</p>
        </div>
      </div>
    </footer>
  )
}
