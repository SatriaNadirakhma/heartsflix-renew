import logo from '../assets/heartsflix.png'
import Icon from './Icon'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Category', href: '#category' },
  { label: 'Teams', href: '#teams' },
  { label: 'About Us', href: '#about-us' },
]

const socialItems = [
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
  { label: 'X', icon: 'x', href: 'https://x.com' },
  { label: 'Discord', icon: 'discord', href: 'https://discord.com' },
]

function Footer() {
  return (
    <footer className="flex flex-col gap-8 border-t border-line bg-surface px-14 pt-12 pb-8 max-[900px]:px-8 max-[900px]:pt-10 max-[900px]:pb-7 max-[640px]:gap-6 max-[640px]:px-5 max-[640px]:pt-8 max-[640px]:pb-6">
      <div className="flex items-start justify-between gap-8 max-[900px]:flex-col">
        <div className="flex max-w-[730px] flex-col gap-5">
          <a href="#home" className="inline-flex self-start" aria-label="Heartsflix home">
            <img className="block h-[30px] w-auto" src={logo} alt="Heartsflix" />
          </a>
          <p className="text-base leading-[1.7] text-ink-muted">
            The Fansites Website Netflix-like, All videos belong to their original
            YouTube channels; posts link to their original accounts.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-start gap-8 pt-[7px] max-[900px]:pt-0"
          aria-label="Footer navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-normal text-ink transition-colors hover:text-ink-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-8 border-t border-line pt-7 max-[900px]:flex-col max-[900px]:items-start">
        <div className="flex h-[42px] w-[172px] flex-none items-center gap-3">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex size-[34px] items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-line-strong hover:bg-surface-hover hover:text-ink"
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={item.icon} size={18} />
            </a>
          ))}
        </div>
        <p className="flex-1 text-sm leading-[1.6] text-ink-muted">
          The Fansites Website Netflix-like, All videos belong to their original YouTube
          channels; posts link to their original accounts.
        </p>
      </div>
    </footer>
  )
}

export default Footer
