import { UtensilsCrossed, Phone, MapPin, CalendarDays } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface HeroProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function Hero({ onNavigate, onOpenReservation }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Video hero — poster shows instantly; video streams in behind it */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/photo-coffee-ceremony.jpg"
        aria-hidden="true"
      >
        <source src="/video-food.mp4" type="video/mp4" />
      </video>
      {/* Fallback image for browsers/devices that block autoplay */}
      <img
        src="/photo-coffee-ceremony.jpg"
        alt="Traditional Ethiopian coffee ceremony jebena with incense smoke"
        className="absolute inset-0 h-full w-full object-cover -z-10"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/50 to-espresso-950/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-400 md:text-base">
          {RESTAURANT.tagline}
        </p>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-cream-100 sm:text-6xl md:text-7xl lg:text-8xl">
          Gebeta Restaurant
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-200/85 md:text-lg">
          Experience the soul of Ethiopia in Minnesota. Traditional recipes, fresh ingredients,
          and the warmth of family hospitality — one shared plate at a time.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => onNavigate('/menu')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-espresso-950 transition-all hover:bg-gold-500 sm:w-auto"
          >
            <UtensilsCrossed size={18} />
            View Menu
          </button>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 sm:w-auto"
          >
            <Phone size={18} />
            Call Now
          </a>
          <button
            onClick={onOpenReservation}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/60 bg-gold-400/10 px-8 py-3.5 text-base font-medium text-gold-400 backdrop-blur-sm transition-all hover:bg-gold-400 hover:text-espresso-950 sm:w-auto"
          >
            <CalendarDays size={18} />
            Reserve a Table
          </button>
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 sm:w-auto"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-cream-100/30">
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-cream-100/50" />
        </div>
      </div>
    </section>
  );
}
