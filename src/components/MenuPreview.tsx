import { ArrowRight } from 'lucide-react';
import { menu } from '@/data/menu';

interface MenuPreviewProps {
  onNavigate: (path: string) => void;
}

export default function MenuPreview({ onNavigate }: MenuPreviewProps) {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            Explore Our Kitchen
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl">
            Menu Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-700">
            From sizzling tibs to the legendary coffee ceremony — discover the full spectrum of
            Ethiopian flavors.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.categories.map((cat) => {
            const count = menu.dishes.filter((d) => d.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => onNavigate(`/menu?cat=${cat.id}`)}
                className="group flex flex-col rounded-2xl border border-espresso-900/10 bg-white p-6 text-left transition-all hover:border-gold-400 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-espresso-900">
                    {cat.name}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-espresso-400 transition-transform group-hover:translate-x-1 group-hover:text-gold-500"
                  />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso-600">
                  {cat.description}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-wider text-gold-600">
                  {count} {count === 1 ? 'dish' : 'dishes'}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('/menu')}
            className="inline-flex items-center gap-2 rounded-full bg-espresso-900 px-8 py-3.5 text-base font-semibold text-cream-100 transition-all hover:bg-espresso-800"
          >
            View Full Menu
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
