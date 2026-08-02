import { UtensilsCrossed, CalendarDays } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface HeroProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function Hero({ onNavigate, onOpenReservation }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:pb-24">
      {/* Hero image */}
      <img
        src="/photo-kitfo-minced.jpg"
        alt="Kitfo — Ethiopian minced beef in a white clay dish on a vibrant habesha plate, surrounded by injera"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Left-heavy gradient so text always reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/95 via-espresso-950/70 to-espresso-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-espresso-950/30" />

      {/* Left-aligned content */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-5 md:px-8">
        <div className="max-w-2xl">
          {/* Badge row */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
            {RESTAURANT.tagline}
          </p>

          {/* Primary headline */}
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-cream-100 sm:text-6xl md:text-7xl lg:text-8xl">
            Authentic<br />
            <span className="text-gold-400">Ethiopian</span><br />
            Cuisine
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-xl font-light tracking-wide text-cream-200/90 md:text-2xl">
            Traditional flavors. Modern experience.
          </p>

          {/* Location badge */}
          <p className="mt-4 text-sm font-medium text-cream-200/55 tracking-wide">
            Minnesota&nbsp;&nbsp;·&nbsp;&nbsp;Fresh Daily&nbsp;&nbsp;·&nbsp;&nbsp;Catering Available
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              id="hero-view-menu"
              onClick={() => onNavigate('/menu')}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-base font-bold text-espresso-950 shadow-lg shadow-gold-400/30 transition-all hover:bg-gold-300 hover:shadow-gold-400/50 active:scale-95"
            >
              <UtensilsCrossed size={19} />
              View Menu
            </button>
            <button
              id="hero-reserve"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream-100/50 px-9 py-4 text-base font-semibold text-cream-100 backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95"
            >
              <CalendarDays size={19} />
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
