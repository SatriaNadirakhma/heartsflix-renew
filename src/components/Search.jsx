import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'

const suggestions = [
  { label: 'Idols', icon: 'user', href: '#idols' },
  { label: 'Album', icon: 'album', href: '#album' },
  { label: 'Trending', icon: 'graph-up', href: '#trending' },
]

const keyClass =
  'flex size-7 items-center justify-center rounded-lg border border-key-outline bg-line text-[#c2c2c2] shadow-[0_1px_2px_rgba(0,0,0,0.04)]'

function Search() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0 })
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  const updatePosition = useCallback(() => {
    const element = searchRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    setPosition({ left: rect.left, top: rect.bottom + 8, width: rect.width })
  }, [])

  const openSearch = useCallback(() => {
    updatePosition()
    setActiveIndex(-1)
    setOpen(true)
  }, [updatePosition])

  const closeSearch = useCallback(() => {
    setOpen(false)
    inputRef.current?.blur()
  }, [])

  useLayoutEffect(() => {
    if (!open) return

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [open, updatePosition])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase()

      if ((event.metaKey || event.ctrlKey) && key === 'k') {
        event.preventDefault()
        if (open) closeSearch()
        else openSearch()
        return
      }

      if (!open) return

      if (event.key === 'Escape') {
        event.preventDefault()
        closeSearch()
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((index) => (index + 1) % suggestions.length)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((index) =>
          index === -1 ? suggestions.length - 1 : (index - 1 + suggestions.length) % suggestions.length,
        )
      } else if (event.key === 'Enter' && activeIndex >= 0) {
        event.preventDefault()
        window.location.hash = suggestions[activeIndex].href
        closeSearch()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, activeIndex, openSearch, closeSearch])

  return (
    <div
      className={`relative min-w-0 flex-1 max-[1100px]:order-4 max-[1100px]:basis-full ${open ? 'z-50' : ''}`}
    >
      <div
        ref={searchRef}
        className={`flex h-[52px] items-center gap-4 rounded-2xl border bg-surface px-6 transition-colors max-[640px]:h-12 max-[640px]:px-4 ${
          open ? 'border-line-strong' : 'border-line'
        }`}
        role="search"
      >
        <Icon name="search" size={22} className="text-search-icon" />
        <input
          ref={inputRef}
          className="min-w-0 flex-1 border-0 bg-transparent p-0 text-lg font-normal text-ink outline-0 placeholder:text-ink-faint max-[640px]:text-base [&::-webkit-search-cancel-button]:appearance-none"
          type="search"
          placeholder="Search Music"
          aria-label="Search Music"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={open ? 'search-dialog' : undefined}
          onFocus={openSearch}
          onClick={openSearch}
        />
        <div className="flex flex-none items-center gap-2 max-[640px]:hidden" aria-hidden="true">
          <kbd className="flex size-[34px] items-center justify-center rounded-lg border border-line bg-surface font-sans text-base font-normal text-ink-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            ⌘
          </kbd>
          <kbd className="flex size-[34px] items-center justify-center rounded-lg border border-line bg-surface font-sans text-base font-normal text-ink-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            K
          </kbd>
        </div>
      </div>

      {open &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={closeSearch}
              aria-hidden="true"
            />

            <div
              id="search-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Search"
              className="fixed z-50"
              style={{ left: position.left, top: position.top, width: position.width }}
            >
              <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
                <div className="flex flex-col px-6 pt-6 pb-4">
                  {suggestions.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeSearch}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                      className={`-mx-2 flex h-11 items-center gap-3 rounded-lg px-2 text-base font-normal text-ink transition-colors ${
                        activeIndex === index ? 'bg-surface-hover' : ''
                      }`}
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-line text-icon-soft">
                        <Icon name={item.icon} size={20} />
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </a>
                  ))}
                </div>

                <div className="flex h-[62px] items-center gap-10 border-t border-line bg-surface px-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-start gap-1">
                      <kbd className={keyClass}>
                        <Icon name="arrow-up" size={16} />
                      </kbd>
                      <kbd className={keyClass}>
                        <Icon name="arrow-down" size={16} />
                      </kbd>
                    </div>
                    <span className="text-base font-normal text-ink-faint">Move</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <kbd className={`${keyClass} text-base`}>↵</kbd>
                    <span className="text-base font-normal text-ink-faint">Select</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <kbd className={`${keyClass} text-[11px]`}>ESC</kbd>
                    <span className="text-base font-normal text-ink-faint">Quit</span>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
    </div>
  )
}

export default Search
