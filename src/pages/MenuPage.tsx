import { useMemo, useState, useEffect } from 'react';
import { Search, Filter, CalendarDays, Truck, Users } from 'lucide-react';
import { menu, getCategoryName } from '@/data/menu';
import { serviceOffers } from '@/data/services';

interface MenuPageProps {
  initialCategory?: string;
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function MenuPage({ initialCategory, onNavigate, onOpenReservation }: MenuPageProps) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string>(initialCategory ?? 'all');

  useEffect(() => {
    if (initialCategory) setActiveCat(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.dishes.filter((d) => {
      const matchesCat = activeCat === 'all' || d.category === activeCat;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  const grouped = useMemo(() => {
    if (activeCat !== 'all') return [{ cat: activeCat, dishes: filtered }];
    return menu.categories
      .map((cat) => ({
        cat: cat.id,
        dishes: filtered.filter((d) => d.category === cat.id),
      }))
      .filter((g) => g.dishes.length > 0);
  }, [filtered, activeCat]);

  return (
    <div className="bg-cream-100 pt-24 md:pt-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            Full Menu
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl lg:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-700">
            Every dish is prepared fresh to order with authentic Ethiopian spices and served with
            traditional injera.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso-400"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              aria-label="Search dishes by name"
              className="w-full rounded-full border border-espresso-900/15 bg-white py-3.5 pl-12 pr-5 text-base text-espresso-900 shadow-sm outline-none transition-all placeholder:text-espresso-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCat('all')}
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCat === 'all'
                ? 'bg-espresso-900 text-cream-100'
                : 'bg-white text-espresso-700 ring-1 ring-espresso-900/10 hover:ring-gold-400'
            }`}
          >
            <Filter size={14} />
            All
          </button>
          {menu.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCat === cat.id
                  ? 'bg-espresso-900 text-cream-100'
                  : 'bg-white text-espresso-700 ring-1 ring-espresso-900/10 hover:ring-gold-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="pb-20 pt-12">
          {filtered.length === 0 && (
            <p className="py-20 text-center text-espresso-500">
              No dishes found. Try a different search or category.
            </p>
          )}

          <div className="space-y-14">
            {grouped.map((group) => (
              <div key={group.cat}>
                <div className="flex items-center gap-4">
                  <h2 className="font-serif text-2xl font-semibold text-espresso-900 md:text-3xl">
                    {getCategoryName(group.cat)}
                  </h2>
                  <div className="h-px flex-1 bg-espresso-900/10" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {group.dishes.map((dish) => (
                    <article
                      key={dish.id}
                      className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-espresso-900/5 transition-all hover:shadow-md"
                    >
                      {dish.image && (
                        <img
                          src={dish.image}
                          alt={dish.name}
                          loading="lazy"
                          className="h-24 w-24 shrink-0 rounded-xl object-cover"
                        />
                      )}
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-serif text-lg font-semibold text-espresso-900">
                          {dish.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-espresso-600">
                          {dish.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-espresso-950 py-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-serif text-2xl font-semibold text-cream-100 md:text-3xl">
            Ready to experience Gebeta?
          </h2>
          <p className="mt-3 text-cream-200/70">
            Join us for a meal you will remember. Walk-ins welcome, and delivery or catering is
            just a tap away.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-espresso-950 transition-all hover:bg-gold-500"
            >
              <CalendarDays size={18} />
              Request a Table
            </button>
            <button
              onClick={() => onNavigate('/#visit')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              Visit Us
            </button>
            <a
              href={serviceOffers[0].primaryActionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              <Truck size={18} />
              Delivery
            </a>
            <a
              href={serviceOffers[1].primaryActionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              <Users size={18} />
              Catering
            </a>
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-3.5 text-base font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
