import { CalendarDays, Phone, Clock, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface ReservationCTAProps {
  onOpenReservation: () => void;
  onNavigate?: (path: string) => void;
}

export default function ReservationCTA({ onOpenReservation, onNavigate }: ReservationCTAProps) {
  return (
    <section className="relative overflow-hidden bg-espresso-950 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.12) 0%, transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
          Reserve Your Table
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-100 md:text-5xl lg:text-6xl">
          Join Us for an<br />Unforgettable Meal
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-200/70">
          Planning a special evening, a family gathering, or an event? Request a table and we will
          confirm your reservation by phone.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onOpenReservation}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold-400 px-10 py-4 text-base font-bold text-espresso-950 shadow-lg shadow-gold-400/25 transition-all hover:bg-gold-300 hover:shadow-gold-400/40 active:scale-95 sm:w-auto"
          >
            <CalendarDays size={19} />
            Reserve a Table
          </button>
          {onNavigate && (
            <button
              onClick={() => onNavigate('/menu')}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-cream-100/40 px-10 py-4 text-base font-semibold text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95 sm:w-auto"
            >
              <UtensilsCrossed size={19} />
              View Menu
            </button>
          )}
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-cream-100/20 px-10 py-4 text-base font-medium text-cream-200/70 transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95 sm:w-auto"
          >
            <Phone size={19} />
            Call {RESTAURANT.phone}
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-cream-200/40">
          <Clock size={14} />
          Open Tue–Sun &nbsp;·&nbsp; Walk-ins welcome
        </p>
      </div>
    </section>
  );
}
