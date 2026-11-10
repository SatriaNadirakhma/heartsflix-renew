import logo from '../assets/heartsflix.png'
import Icon from './Icon'
import Search from './Search'

const navItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Category', href: '#category' },
  { label: 'Teams', href: '#teams' },
  { label: 'About Us', href: '#about-us' },
]

function Navbar() {
  return (
    <header className="flex items-center gap-[42px] bg-page px-14 py-5 max-[1100px]:flex-wrap max-[1100px]:gap-x-7 max-[1100px]:gap-y-5 max-[1100px]:px-8 max-[640px]:gap-x-5 max-[640px]:gap-y-4 max-[640px]:px-5 max-[640px]:py-4">
      <a href="#home" className="flex flex-none items-center" aria-label="Heartsflix home">
        <img className="block h-[30px] w-auto" src={logo} alt="Heartsflix" />
      </a>

      <nav className="flex flex-none items-center gap-7 max-[640px]:gap-[18px]" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`whitespace-nowrap text-sm transition-colors hover:text-ink ${
              item.active ? 'font-semibold text-ink' : 'font-normal text-ink-muted'
            }`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Search />

      <div className="flex flex-none items-center gap-[22px]">
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-icon transition-colors hover:text-ink"
          aria-label="Notifications"
        >
          <Icon name="bell" size={24} />
        </button>
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-icon transition-colors hover:text-ink"
          aria-label="Account"
        >
          <Icon name="user" size={24} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
