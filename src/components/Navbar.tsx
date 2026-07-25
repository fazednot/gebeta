import { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarDays } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

const links = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Our Story', path: '/#story' },
  { label: 'Services', path: '/#services' },
  { label: 'Gallery', path: '/#gallery' },
  { label: 'Visit Us', path: '/#visit' },
];

export default function Navbar({ currentPath, onNavigate, onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-espresso-950/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-espresso-950/70 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8">
        <button
          onClick={() => handleNav('/')}
          className="font-serif text-2xl font-semibold tracking-wide text-cream-100 transition-colors hover:text-gold-400"
          aria-label="Gebeta Restaurant home"
        >
          Gebeta
          <span className="ml-1 text-gold-400">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => handleNav(link.path)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-400 ${
                  currentPath === link.path ? 'text-gold-400' : 'text-cream-100'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-500"
          >
            <CalendarDays size={15} />
            Reserve
          </button>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-5 py-2 text-sm font-medium text-gold-400 transition-all hover:bg-gold-400 hover:text-espresso-950"
          >
            <Phone size={15} />
            Call
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-cream-100 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-100/10 bg-espresso-950/98 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => handleNav(link.path)}
                  className={`w-full rounded-lg px-3 py-3 text-left text-base font-medium transition-colors hover:bg-espresso-800 ${
                    currentPath === link.path ? 'text-gold-400' : 'text-cream-100'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenReservation();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-center text-base font-semibold text-espresso-950"
              >
                <CalendarDays size={18} />
                Reserve a Table
              </button>
              <a
                href={RESTAURANT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-gold-400/60 px-5 py-3 text-center text-base font-medium text-gold-400"
              >
                <Phone size={18} />
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
