import { UtensilsCrossed, CalendarDays } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function Hero({ onNavigate, onOpenReservation }: HeroProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:pb-24">
      {/* Hero background asset */}
      <img
        src="/photo-hero-feast.jpg"
        alt="Full Ethiopian feast platter with sizzling tibs, doro wot, shiro, and injera"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Light gradient overlay on left for text legibility while keeping food prominent */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/90 via-espresso-950/60 to-transparent md:w-3/4 lg:w-2/3" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-espresso-950/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-5 md:px-8">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            {t(RESTAURANT.tagline, 'እውነተኛ የኢትዮጵያ ባህላዊ ምግብ')}
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl font-extrabold leading-[1.05] text-cream-100 sm:text-6xl md:text-7xl lg:text-8xl">
            {lang === 'am' ? (
              <>
                እውነተኛ<br />
                <span className="text-gold-400">የኢትዮጵያ</span><br />
                ምግቦች
              </>
            ) : (
              <>
                Authentic<br />
                <span className="text-gold-400">Ethiopian</span><br />
                Cuisine
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-xl font-light tracking-wide text-cream-200/90 md:text-2xl">
            {t('Traditional flavors. Modern experience.', 'ባህላዊ ጣዕም። ዘመናዊ መስተንግዶ።')}
          </p>

          {/* Location badge */}
          <p className="mt-4 text-sm font-medium tracking-wide text-cream-200/60">
            {t('West St Paul, Minnesota  ·  Fresh Daily  ·  Catering Available', 'ዌስት ሴንት ፖል፣ ሚኒሶታ  ·  በየቀኑ ትኩስ  ·  ኬተሪንግ አገልጋይ')}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              id="hero-view-menu"
              onClick={() => onNavigate('/menu')}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-base font-bold text-espresso-950 shadow-lg shadow-gold-400/30 transition-all hover:bg-gold-300 hover:shadow-gold-400/50 active:scale-95"
            >
              <UtensilsCrossed size={19} />
              {t('View Menu', 'ሜኑ ይመልከቱ')}
            </button>
            <button
              id="hero-reserve"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream-100/50 px-9 py-4 text-base font-semibold text-cream-100 backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95"
            >
              <CalendarDays size={19} />
              {t('Reserve Table', 'ቦታ ይያዙ')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
