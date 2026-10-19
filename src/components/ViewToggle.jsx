const options = [
  { value: 'grid', label: 'Grid view' },
  { value: 'list', label: 'List view' },
]

export default function ViewToggle({ value, onChange }) {
  return (
    <div role="group" aria-label="Choose layout" className="flex rounded-full border border-ink/30 bg-white p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            value === option.value ? 'bg-ink text-white' : 'hover:bg-ink/10'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
