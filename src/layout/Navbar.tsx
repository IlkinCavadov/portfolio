import { ThemeToggle } from '../components/ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const;

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-line bg-bg-nav backdrop-blur-md">
    <nav
      aria-label="Primary"
      className="mx-auto flex h-16 max-w-[1080px] items-center justify-between gap-6 px-[clamp(20px,5vw,40px)]"
    >
      <a href="#top" className="flex items-baseline gap-2 text-sm tracking-[-0.01em] text-tx-1">
        <span className="font-semibold">Ilkin Javadov</span>
        <span className="font-mono text-[11px] text-tx-3">/ JavoLab</span>
      </a>
      <div className="flex flex-wrap items-center gap-[clamp(16px,3vw,28px)] font-mono text-xs tracking-[0.02em]">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-tx-3 transition-colors duration-150 hover:text-tx-1">
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  </header>
);
