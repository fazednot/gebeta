import { Instagram, Facebook, MapPin, Phone, MessageCircle, CalendarDays } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function Footer({ onNavigate, onOpenReservation }: FooterProps) {
  return (
    <footer className="bg-espresso-950 text-cream-200">
      <div className="mx-auto max-w-8xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-cream-100">
              Gebeta<span className="text-gold-400">.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
              Authentic Ethiopian cuisine in the heart of Minnesota. Traditional recipes,
              fresh ingredients, warm family hospitality, plus dine-in, takeout, delivery, and catering.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={RESTAURANT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-cream-100/20 p-2.5 text-cream-200 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram size={18} />
              </a>
              <a
                href={RESTAURANT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-cream-100/20 p-2.5 text-cream-200 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'Full Menu', path: '/menu' },
                { label: 'Our Story', path: '/#story' },
                { label: 'Services', path: '/#services' },
                { label: 'Gallery', path: '/#gallery' },
                { label: 'Visit Us', path: '/#visit' },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-cream-200/70 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  {RESTAURANT.address.street}
                  <br />
                  {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
                </span>
              </li>
              <li>
                <a
                  href={RESTAURANT.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                >
                  <Phone size={16} className="shrink-0 text-gold-400" />
                  {RESTAURANT.phone}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                >
                  <CalendarDays size={16} className="shrink-0 text-gold-400" />
                  Reserve a Table
                </button>
              </li>
              <li>
                <a
                  href={RESTAURANT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                >
                  <MessageCircle size={16} className="shrink-0 text-gold-400" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Hours
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-cream-200/70">
              {RESTAURANT.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-cream-200/50">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-100/10 pt-6 text-center text-xs text-cream-200/40">
          &copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
