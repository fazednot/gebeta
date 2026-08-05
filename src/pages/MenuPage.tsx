import { useMemo, useState, useEffect } from 'react';
import { Search, Filter, Printer, Download, Eye, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { menu, getCategoryName, RESTAURANT } from '@/data/menu';
import { serviceOffers } from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';

interface MenuPageProps {
  initialCategory?: string;
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

const OFFICIAL_MENU_PAGES = [
  {
    id: 1,
    title: 'Page 1 — Starters, Tibs & Kitfo',
    subtitle: 'Kateyna, Sambusas, Lega Tibs, Chekina Tibs, Special Kitfo, Beef Ribs',
    src: '/menu_pages/photo_1_2026-08-03_21-39-40.jpg',
  },
  {
    id: 2,
    title: 'Page 2 — Drinks, Teas & Wines',
    subtitle: 'Juices, Ethiopian Teas, Jebena Coffee Ceremony, Soft Drinks, Wines',
    src: '/menu_pages/photo_2_2026-08-03_21-39-40.jpg',
  },
  {
    id: 3,
    title: 'Page 3 — Pasta, House Specials & Kids',
    subtitle: 'Pasta Sils, Bozena Shiro, Shekla Tibs, Quanta Firfir, Kids Menu',
    src: '/menu_pages/photo_3_2026-08-03_21-39-40.jpg',
  },
];

export default function MenuPage({ initialCategory, onNavigate, onOpenReservation }: MenuPageProps) {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string>(initialCategory ?? 'all');
  const [activePageTab, setActivePageTab] = useState<number>(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory) setActiveCat(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.dishes.filter((d) => {
      const matchesCat = activeCat === 'all' || d.category === activeCat;
      const nameAm = (d as any).nameAm || '';
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        nameAm.toLowerCase().includes(q) ||
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

  const scrollToExplorer = () => {
    const el = document.getElementById('digital-menu-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream-100 pt-24 md:pt-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        
        {/* Page Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-600/30 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-700">
            <Sparkles size={14} /> {t('Official Restaurant Menu', 'ኦፊሴላዊ የሬስቶራንት ሜኑ')}
          </span>
          <h1 className="mt-3 font-serif text-4xl font-extrabold text-espresso-950 md:text-5xl lg:text-6xl">
            {t('Gebeta Menu', 'የገበታ ሜኑ')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-800">
            {t(
              'Explore our official in-restaurant printed menu sheets below, followed by the interactive dish directory.',
              'ኦፊሴላዊውን በሬስቶራንቱ ውስጥ የሚገኘውን የታተመ ሜኑ ከታች ይመልከቱ፣ በመቀጠልም ምግቦችን በዝርዝር ማሰስ ይችላሉ።'
            )}
          </p>

          {/* Header Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              onClick={handlePrintPDF}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-bold text-espresso-950 shadow-md transition-all hover:bg-gold-500 active:scale-95"
            >
              <Printer size={16} />
              {t('Export / Print PDF Menu', 'ሜኑ በPDF ያውርዱ / ያትሙ')}
            </button>

            <button
              onClick={scrollToExplorer}
              className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 bg-white px-6 py-2.5 text-sm font-semibold text-espresso-900 shadow-sm transition-all hover:border-gold-400 hover:text-gold-600 active:scale-95"
            >
              <Filter size={16} />
              {t('Interactive Dish Directory', 'የምግቦች ዝርዝር')} &rarr;
            </button>
          </div>
        </div>

        {/* SECTION 1: LEADING WITH THE REAL OFFICIAL MENU (IMAGES) */}
        <section className="mt-12 rounded-3xl border border-gold-400/30 bg-espresso-950 p-6 md:p-10 shadow-2xl text-cream-100">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-cream-100/10 pb-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gold-400" />
                <h2 className="font-serif text-2xl font-bold text-cream-100 md:text-3xl">
                  {t('Official In-House Printed Menu', 'በሬስቶራንት ውስጥ የሚገኝ ኦፊሴላዊ ሜኑ')}
                </h2>
              </div>
              <p className="mt-1 text-xs text-cream-200/70">
                Original printed menu sheets from Gebeta Restaurant · 1049 Dodd Rd, West St Paul, MN
              </p>
            </div>

            {/* Page Selector Tabs */}
            <div className="flex flex-wrap gap-2 print:hidden">
              {OFFICIAL_MENU_PAGES.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setActivePageTab(page.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activePageTab === page.id
                      ? 'bg-gold-400 text-espresso-950 shadow-md'
                      : 'bg-cream-100/10 text-cream-200 hover:bg-cream-100/20'
                  }`}
                >
                  {t(`Page ${page.id}`, `ገጽ ${page.id}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Active Printed Menu Sheet Viewer */}
          <div className="mt-8">
            {OFFICIAL_MENU_PAGES.filter((p) => p.id === activePageTab).map((page) => (
              <div key={page.id} className="grid items-center gap-8 lg:grid-cols-12">
                
                {/* Image Display Card (8 cols) */}
                <div className="relative overflow-hidden rounded-2xl border border-cream-100/15 bg-black/40 lg:col-span-8 group">
                  <img
                    src={page.src}
                    alt={page.title}
                    className="w-full object-contain max-h-[750px] transition-transform duration-500 group-hover:scale-102 cursor-pointer"
                    onClick={() => setLightboxImage(page.src)}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 rounded-full bg-espresso-950/90 px-5 py-2.5 text-xs font-bold text-gold-400 border border-gold-400/40 backdrop-blur-md shadow-xl">
                      <Maximize2 size={16} /> {t('Click to View Fullscreen', 'በሙሉ ስክሪን ለማየት ይጫኑ')}
                    </span>
                  </div>
                </div>

                {/* Sidebar Info & Sheet Navigation (4 cols) */}
                <div className="space-y-6 lg:col-span-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                      {t(`Menu Sheet ${page.id} of 3`, `የሜኑ ገጽ ${page.id} ከ 3`)}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-cream-100">
                      {page.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-cream-200/70">
                      {page.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setLightboxImage(page.src)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-xs font-bold text-espresso-950 transition-all hover:bg-gold-300"
                    >
                      <Maximize2 size={15} />
                      {t('Fullscreen High-Res View', 'በከፍተኛ ጥራት በሙሉ ስክሪን ይዩ')}
                    </button>
                    <a
                      href={page.src}
                      download={`gebeta-official-menu-page-${page.id}.jpg`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-xs font-semibold text-cream-100 transition-all hover:border-gold-400 hover:text-gold-400"
                    >
                      <Download size={15} />
                      {t(`Download Menu Sheet Page ${page.id}`, `የሜኑ ገጽ ${page.id} ያውርዱ`)}
                    </a>
                  </div>

                  {/* All 3 Thumbnail Quick Access */}
                  <div className="border-t border-cream-100/10 pt-6">
                    <p className="text-xs font-semibold text-cream-200/60">{t('Switch Page:', 'ገጽ ይቀይሩ:')}</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {OFFICIAL_MENU_PAGES.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setActivePageTab(p.id)}
                          className={`relative overflow-hidden rounded-lg border transition-all ${
                            activePageTab === p.id
                              ? 'border-gold-400 ring-2 ring-gold-400/50'
                              : 'border-cream-100/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={p.src} alt={p.title} className="h-16 w-full object-cover" />
                          <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[10px] font-bold text-cream-100 py-0.5 text-center">
                            Page {p.id}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>


        {/* SECTION 2: INTERACTIVE DIGITAL MENU EXPLORER */}
        <div id="digital-menu-explorer" className="mt-20 border-t border-espresso-900/10 pt-16">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              {t('Interactive Directory', 'የምግቦች ማውጫ')}
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-espresso-900 md:text-4xl">
              {t('Search & Filter Dishes', 'ምግቦችን ይፈልጉ')}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-espresso-700">
              {t(
                'Use the search bar and category filters below to quickly find specific dishes, ingredients, and descriptions.',
                'የሚፈልጉትን ምግብ በፍጥነት ለማግኘት ከታች ያለውን መፈለጊያ ይጠቀሙ።'
              )}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl print:hidden">
            <div className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso-400"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('Search dishes by name or ingredient...', 'ምግቦችን በስም ወይም በቅመም ይፈልጉ...')}
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
              {t('All Dishes', 'ሁሉም ምግቦች')}
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
                {lang === 'am' && (cat as any).nameAm ? (cat as any).nameAm : cat.name}
              </button>
            ))}
          </div>

          {/* Dish List Grid */}
          <div className="mt-12 space-y-16 pb-20">
            {grouped.map(({ cat, dishes }) => {
              const catObj = menu.categories.find((c) => c.id === cat);
              const catTitle = lang === 'am' && (catObj as any)?.nameAm ? (catObj as any).nameAm : getCategoryName(cat);

              return (
                <section key={cat} className="space-y-6">
                  <div className="border-b border-espresso-900/10 pb-3">
                    <h3 className="font-serif text-2xl font-bold text-espresso-900 md:text-3xl">
                      {catTitle}
                    </h3>
                    <p className="mt-1 text-sm text-espresso-600">
                      {catObj?.description}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {dishes.map((dish) => {
                      const dishTitle = lang === 'am' && (dish as any).nameAm ? (dish as any).nameAm : dish.name;

                      return (
                        <article
                          key={dish.id}
                          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-espresso-900/5 transition-all hover:shadow-md print:shadow-none print:ring-1 print:ring-gray-300"
                        >
                          {/* Uncropped Dish Picture Container */}
                          {dish.image && (
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso-950/5 p-2 print:hidden">
                              <img
                                src={dish.image}
                                alt={dishTitle}
                                loading="lazy"
                                className="h-full w-full object-contain"
                              />
                            </div>
                          )}
                          <div className="flex flex-1 flex-col p-6">
                            <h4 className="font-serif text-xl font-semibold text-espresso-900">
                              {dishTitle}
                            </h4>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso-600">
                              {dish.description}
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg font-medium text-espresso-800">{t('No dishes match your search.', 'ምንም የተገኘ ምግብ የለም።')}</p>
                <button
                  onClick={() => {
                    setQuery('');
                    setActiveCat('all');
                  }}
                  className="mt-4 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-espresso-950"
                >
                  {t('Clear Search & Filters', 'መፈለጊያውን ያጽዱ')}
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal for Menu Sheets */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md print:hidden cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-h-[95vh] max-w-[95vw] overflow-auto">
            <button
              onClick={() => setLightboxImage(null)}
              className="fixed top-6 right-6 z-50 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-bold text-espresso-950 shadow-2xl hover:bg-gold-300"
            >
              Close Fullscreen ✕
            </button>
            <img
              src={lightboxImage}
              alt="Official Gebeta Menu Sheet Fullscreen"
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}

    </div>
  );
}
