import { CalendarDays, Phone, Clock } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

interface ReservationCTAProps {
  onOpenReservation: () => void;
}

export default function ReservationCTA({ onOpenReservation }: ReservationCTAProps) {
  return (
    <section className="relative overflow-hidden bg-espresso-950 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
          Reserve Your Table
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-100 md:text-5xl">
          Join Us for an Unforgettable Meal
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-200/70">
          Planning a special evening, a family gathering, or an event where food needs to be
          handled with care? Request a table and we will confirm your reservation by phone.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={onOpenReservation}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-espresso-950 transition-all hover:bg-gold-500 sm:w-auto"
          >
            <CalendarDays size={18} />
            Request a Table
          </button>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400 sm:w-auto"
          >
            <Phone size={18} />
            Call {RESTAURANT.phone}
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-cream-200/50">
          <Clock size={15} />
          Open Tue-Sun · Walk-ins welcome
        </p>
      </div>
    </section>
  );
}
