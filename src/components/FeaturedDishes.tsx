import { ArrowRight } from 'lucide-react';
import { menu } from '@/data/menu';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

interface FeaturedDishesProps {
  onNavigate?: (path: string) => void;
}

export default function FeaturedDishes({ onNavigate }: FeaturedDishesProps) {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const dishes = menu.dishes.filter((d) => d.featured).slice(0, 6);

  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            {t("Chef's Selections", 'የሼፉ ምርጦች')}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl">
            {t('Featured Dishes', 'ምርጥ ምግቦቻችን')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-700">
            {t(
              'A taste of what awaits you — each dish prepared with traditional spices and time-honored recipes passed down through generations.',
              'የሚጠብቅዎት ጣፋጭ ምግብ — እያንዳንዱ ምግብ በባህላዊ ቅመማ ቅመሞችና ከትውልድ ወደ ትውልድ በተላለፉ የምግብ አሰራሮች የተዘጋጀ ነው።'
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-espresso-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-gold-400/30"
            >
              {/* Uncropped Dish Picture Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso-950/5 p-2">
                <img
                  src={dish.image}
                  alt={lang === 'am' && (dish as any).nameAm ? (dish as any).nameAm : dish.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-espresso-900">
                  {lang === 'am' && (dish as any).nameAm ? (dish as any).nameAm : dish.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso-600">{dish.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-espresso-900/10 pt-4">
                  <span className="text-lg font-bold text-gold-600">
                    ${dish.price?.toFixed(2) || '0.00'}
                  </span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: dish.id,
                        name: dish.name,
                        nameAm: (dish as any).nameAm,
                        price: dish.price || 0,
                      })
                    }
                    className="inline-flex items-center gap-1.5 rounded-full bg-espresso-900 px-4 py-2 text-xs font-bold text-cream-100 transition-colors hover:bg-gold-400 hover:text-espresso-950"
                  >
                    {t('Add to Cart', 'ወደ ቅርጫት')}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {onNavigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/menu')}
              className="inline-flex items-center gap-2 rounded-full border-2 border-espresso-900 px-8 py-3.5 text-base font-semibold text-espresso-900 transition-all hover:bg-espresso-900 hover:text-cream-100"
            >
              {t('See Full Menu', 'ሙሉውን ሜኑ ይመልከቱ')}
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
