function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterTabsProps {
  options: FilterOption[]
  selected: string
  onSelect: (value: string) => void
}

export default function FilterTabs({ options, selected, onSelect }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onSelect(option.value)}
          className={joinClasses(
            'rounded-full px-5 py-3 text-sm font-semibold transition duration-300',
            selected === option.value
              ? 'bg-ink text-white shadow-soft'
              : 'border border-ink/10 bg-white/85 text-ink/70 shadow-soft hover:bg-white hover:text-ink',
          )}
        >
          {option.label}
          {typeof option.count === 'number' ? ` (${option.count})` : ''}
        </button>
      ))}
    </div>
  )
}
