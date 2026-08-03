import { useMemo, useState, useEffect } from 'react';
import { Search, Filter, CalendarDays, Truck, Users, Download, Printer, FileText } from 'lucide-react';
import { menu, getCategoryName, RESTAURANT } from '@/data/menu';
import { serviceOffers } from '@/data/services';

interface MenuPageProps {
  initialCategory?: string;
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function MenuPage({ initialCategory, onNavigate, onOpenReservation }: MenuPageProps) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string>(initialCategory ?? 'all');
  const [showOriginalMenuModal, setShowOriginalMenuModal] = useState(false);

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

  const handlePrintPDF = () => {
    window.print();
  };

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

          {/* PDF Export & Printed Menu Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              onClick={handlePrintPDF}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-bold text-espresso-950 shadow-md transition-all hover:bg-gold-500 active:scale-95"
            >
              <Printer size={16} />
              Export / Print PDF Menu
            </button>

            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 bg-white px-6 py-2.5 text-sm font-semibold text-espresso-900 shadow-sm transition-all hover:border-gold-400 hover:text-gold-600 active:scale-95"
            >
              <FileText size={16} />
              View Official Printed Menu
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-2xl print:hidden">
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

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 print:hidden">
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

        {/* Dish List Grid */}
        <div className="mt-12 space-y-16 pb-20">
          {grouped.map(({ cat, dishes }) => (
            <section key={cat} className="space-y-6">
              <div className="border-b border-espresso-900/10 pb-3">
                <h2 className="font-serif text-2xl font-semibold text-espresso-900 md:text-3xl">
                  {getCategoryName(cat)}
                </h2>
                <p className="mt-1 text-sm text-espresso-600">
                  {menu.categories.find((c) => c.id === cat)?.description}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dishes.map((dish) => (
                  <article
                    key={dish.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-espresso-900/5 transition-all hover:shadow-md print:shadow-none print:ring-1 print:ring-gray-300"
                  >
                    {dish.image && (
                      <div className="aspect-[4/3] overflow-hidden print:hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-semibold text-espresso-900">
                        {dish.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso-600">
                        {dish.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-espresso-800">No dishes match your search.</p>
              <button
                onClick={() => {
                  setQuery('');
                  setActiveCat('all');
                }}
                className="mt-4 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-espresso-950"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          )}
        </div>

        {/* Services Quick Bar */}
        <section className="border-t border-espresso-900/10 py-16 print:hidden">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-espresso-900 md:text-3xl">
              Order, Delivery &amp; Catering
            </h2>
            <p className="mt-2 text-sm text-espresso-600">
              Enjoy Gebeta at home or let us cater your next gathering.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {serviceOffers.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-espresso-900/5"
                >
                  <h3 className="font-serif text-lg font-semibold text-espresso-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-espresso-600">
                    {item.description}
                  </p>
                  <a
                    href={item.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700"
                  >
                    {item.ctaText} &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Official Printed Menu Modal */}
      {showOriginalMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print:hidden">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-espresso-950 p-6 text-cream-100 shadow-2xl">
            <div className="flex items-center justify-between border-b border-cream-100/10 pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream-100">
                  Gebeta Official Printed Menu
                </h3>
                <p className="text-xs text-cream-200/60">
                  Physical menu sheets from Gebeta Restaurant
                </p>
              </div>
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                className="rounded-full bg-cream-100/10 px-4 py-2 text-xs font-semibold text-cream-100 hover:bg-cream-100/20"
              >
                Close ✕
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {[
                { title: 'Page 1 — Starters, Tibs & Kitfo', src: '/menu_pages/photo_1_2026-08-03_21-39-40.jpg' },
                { title: 'Page 2 — Drinks & Wines', src: '/menu_pages/photo_2_2026-08-03_21-39-40.jpg' },
                { title: 'Page 3 — Pasta, House Specials & Kids', src: '/menu_pages/photo_3_2026-08-03_21-39-40.jpg' },
              ].map((page, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gold-400">{page.title}</h4>
                    <a
                      href={page.src}
                      download={`gebeta-menu-page-${idx + 1}.jpg`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cream-200/80 hover:text-gold-400"
                    >
                      <Download size={13} /> Save Image
                    </a>
                  </div>
                  <img
                    src={page.src}
                    alt={page.title}
                    className="w-full rounded-2xl border border-cream-100/10 shadow-lg"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                className="rounded-full bg-gold-400 px-8 py-3 text-sm font-bold text-espresso-950 hover:bg-gold-500"
              >
                Back to Digital Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
