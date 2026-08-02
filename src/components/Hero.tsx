import { UtensilsCrossed, CalendarDays, Star, Flame, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface HeroProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function Hero({ onNavigate, onOpenReservation }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-espresso-950 pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center">
      {/* Ambient background glow & subtle food backdrop */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/photo-hero-feast.jpg"
          alt="Ethiopian Feast Background"
          className="h-full w-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/90 to-espresso-950/70" />
      </div>

      {/* Decorative ambient light orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Typography & CTAs (7 cols on LG) */}
          <div className="lg:col-span-7">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                {RESTAURANT.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-serif text-5xl font-extrabold leading-[1.05] tracking-tight text-cream-100 sm:text-6xl md:text-7xl xl:text-8xl">
              Taste The <br />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
                Soul of Ethiopia
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream-200/90 sm:text-xl">
              Sizzling tibs, slow-simmered doro wot, and vibrant vegan platters cooked with authentic berbere spices &amp; served fresh on warm injera.
            </p>

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-medium text-cream-100/80">
              <span className="flex items-center gap-1.5 rounded-lg border border-cream-100/10 bg-cream-100/5 px-3 py-1.5 backdrop-blur-sm">
                <Flame size={14} className="text-gold-400" /> Sizzling Tibs
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-cream-100/10 bg-cream-100/5 px-3 py-1.5 backdrop-blur-sm">
                <Sparkles size={14} className="text-gold-400" /> 8-Stew Platters
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-cream-100/10 bg-cream-100/5 px-3 py-1.5 backdrop-blur-sm">
                <MapPin size={14} className="text-gold-400" /> Minnesota
              </span>
            </div>

            {/* Action CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                id="hero-view-menu"
                onClick={() => onNavigate('/menu')}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-400 px-9 py-4 text-base font-bold text-espresso-950 shadow-xl shadow-gold-400/25 transition-all hover:bg-gold-300 hover:shadow-gold-400/40 active:scale-95"
              >
                <UtensilsCrossed size={20} className="transition-transform group-hover:rotate-12" />
                <span>Explore Menu</span>
              </button>

              <button
                id="hero-reserve"
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-cream-100/40 bg-cream-100/5 px-9 py-4 text-base font-semibold text-cream-100 backdrop-blur-md transition-all hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-400 active:scale-95"
              >
                <CalendarDays size={20} />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Social Trust / Rating */}
            <div className="mt-10 flex items-center gap-4 border-t border-cream-100/10 pt-6">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-espresso-950 ring-2 ring-espresso-950">
                  ★
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-espresso-950 ring-2 ring-espresso-950">
                  ★
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-300 text-xs font-bold text-espresso-950 ring-2 ring-espresso-950">
                  ★
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-cream-100">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-cream-200/60">Loved by guests across Minnesota</p>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Cinematic Hero Food Showcase (5 cols on LG) */}
          <div className="relative lg:col-span-5">
            {/* Glowing backdrop card effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-gold-500/30 to-amber-600/20 blur-xl opacity-70" />

            {/* Food Image Container */}
            <div className="relative overflow-hidden rounded-3xl border border-cream-100/15 bg-espresso-900 shadow-2xl group">
              <img
                src="/photo-hero-feast.jpg"
                alt="Cinematic Ethiopian Feast Platter"
                fetchPriority="high"
                className="h-[440px] sm:h-[520px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Light vignette overlay over image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-black/20" />

              {/* Top Floating Glass Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-espresso-950/80 px-3.5 py-1.5 text-xs font-bold text-gold-400 border border-gold-400/30 backdrop-blur-md">
                  <Flame size={14} className="animate-bounce" /> Hot &amp; Fresh Daily
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-espresso-950/80 px-3 py-1.5 text-xs font-medium text-cream-100 border border-cream-100/20 backdrop-blur-md">
                  100% Traditional
                </span>
              </div>

              {/* Bottom Floating Glass Dish Spotlight Card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-cream-100/20 bg-espresso-950/85 p-4 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                      Chef's Special
                    </span>
                    <h3 className="font-serif text-lg font-bold text-cream-100">
                      Signature Gebeta Combination Platter
                    </h3>
                    <p className="mt-0.5 text-xs text-cream-200/70">
                      Sega Tibs, Doro Wot, Veggie Stews &amp; Fresh Injera
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('/menu')}
                    className="shrink-0 rounded-full bg-gold-400 p-2.5 text-espresso-950 transition-all hover:bg-gold-300"
                    title="Order / View Menu"
                  >
                    <UtensilsCrossed size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
