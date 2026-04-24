interface DashboardStatProps {
  label: string
  value: string
  detail: string
}

export default function DashboardStat({ label, value, detail }: DashboardStatProps) {
  return (
    <div className="card-surface p-5 sm:p-6">
      <p className="text-sm uppercase tracking-[0.28em] text-ink/45">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-ink">{value}</p>
      <p className="mt-2 text-sm leading-6 text-ink/60">{detail}</p>
    </div>
  )
}
