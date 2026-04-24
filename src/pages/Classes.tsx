import { useSearchParams } from 'react-router-dom'
import { CakeSlice, Cookie, Croissant, CupSoda, Dessert, Donut } from 'lucide-react'
import ClassCard from '../components/ClassCard'
import FilterTabs from '../components/FilterTabs'
import PageHero from '../components/PageHero'
import { classes, type ClassMode } from '../data/siteData'

type FilterValue = 'all' | ClassMode

const validFilters: FilterValue[] = ['all', 'online', 'offline', 'recorded']
const bakeryTiles = [
  { icon: CakeSlice, label: 'Cakes' },
  { icon: Croissant, label: 'Pastries' },
  { icon: Dessert, label: 'Cheesecakes' },
  { icon: CupSoda, label: 'Shakes' },
  { icon: Cookie, label: 'Cookies' },
  { icon: Donut, label: 'Sweet treats' },
]

export default function Classes() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentFilter = searchParams.get('mode')
  const selectedFilter = validFilters.includes(currentFilter as FilterValue)
    ? (currentFilter as FilterValue)
    : 'all'

  const filteredClasses =
    selectedFilter === 'all'
      ? classes
      : classes.filter((course) => course.mode === selectedFilter)

  const options = [
    { value: 'all', label: 'All', count: classes.length },
    { value: 'online', label: 'Online', count: classes.filter((item) => item.mode === 'online').length },
    { value: 'offline', label: 'Offline', count: classes.filter((item) => item.mode === 'offline').length },
    { value: 'recorded', label: 'Recorded', count: classes.filter((item) => item.mode === 'recorded').length },
  ]

  return (
    <>
      <PageHero
        eyebrow="Bakery class menu"
        title="Browse classes for cakes, pastries, shakes, cheesecakes, and sweet bakery treats."
        description="Filter by online, offline, or recorded and pick your bakery style."
        aside={
          <div className="grid gap-3 sm:grid-cols-2">
            {bakeryTiles.map((item) => (
              <div key={item.label} className="rounded-[24px] bg-white/88 p-4 shadow-soft">
                <item.icon className="h-6 w-6 text-ink/65" />
                <p className="mt-3 text-base font-semibold text-ink">{item.label}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="shell section-space">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">Filter classes</p>
            <h2 className="mt-3 text-4xl font-semibold">Choose your bakery class.</h2>
          </div>
          <FilterTabs
            options={options}
            selected={selectedFilter}
            onSelect={(value) => {
              const nextValue = value as FilterValue
              if (nextValue === 'all') {
                setSearchParams({})
                return
              }

              setSearchParams({ mode: nextValue })
            }}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {['Cakes', 'Pastries', 'Cheesecakes', 'Shakes', 'Cookies', 'Brownies'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-blush/35 bg-white/88 px-4 py-2 text-sm font-semibold text-ink/70 shadow-soft"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-ink/65">
          Showing {filteredClasses.length} {filteredClasses.length === 1 ? 'class' : 'classes'} for{' '}
          <span className="font-semibold text-ink">{selectedFilter === 'all' ? 'all formats' : selectedFilter}</span>.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredClasses.map((course) => (
            <ClassCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  )
}
