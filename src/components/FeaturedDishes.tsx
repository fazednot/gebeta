import { menu, formatPrice } from '@/data/menu';

export default function FeaturedDishes() {
  const dishes = menu.dishes.filter((d) => d.featured).slice(0, 6);

  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            Chef's Selections
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl">
            Featured Dishes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-700">
            A taste of what awaits you — each dish prepared with traditional spices and time-honored
            recipes passed down through generations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-espresso-900/5 transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-espresso-900">{dish.name}</h3>
                  <span className="shrink-0 font-sans text-lg font-semibold text-gold-600">
                    {formatPrice(dish.price)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-espresso-600">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
