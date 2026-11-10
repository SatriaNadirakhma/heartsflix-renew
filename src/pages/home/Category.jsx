import { useState } from 'react'
import { categories } from './content'

function Category({ value, onChange }) {
  const [internalValue, setInternalValue] = useState('all')
  const activeValue = value ?? internalValue

  const handleSelect = (id) => {
    if (value === undefined) setInternalValue(id)
    onChange?.(id)
  }

  return (
    <section
      className="mt-8 flex items-center gap-3 border-b border-line"
      aria-label="Category filter"
    >
      <span className="w-[88px] flex-none text-[13px] font-normal text-ink-soft">
        Category
      </span>

      <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.id === activeValue

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleSelect(category.id)}
              aria-pressed={isActive}
              className={`flex h-10 flex-none items-center rounded-full border px-4 text-sm whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-brand bg-brand font-semibold text-brand-ink'
                  : 'border-line bg-surface font-medium text-ink-muted hover:border-line-strong hover:text-ink'
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Category
