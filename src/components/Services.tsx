import { Check, MessageCircle, Phone, Truck, Users } from 'lucide-react';
import { serviceOffers } from '@/data/services';

const iconMap = {
  delivery: Truck,
  catering: Users,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            More Than Dine-In
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl">
            Delivery and Catering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-espresso-700">
            Gebeta is ready for a table in the restaurant, a meal at home, or a larger order for
            your next gathering. We keep the process simple, fast, and static-site friendly.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {serviceOffers.map((service) => {
            const Icon = iconMap[service.id];

            return (
              <article
                key={service.id}
                className="rounded-2xl border border-espresso-900/10 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-espresso-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full border border-espresso-900/10 px-3 py-1 text-xs font-medium text-espresso-600">
                    Available now
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-espresso-700">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-espresso-700">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={service.primaryActionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-espresso-900 px-5 py-3 text-sm font-semibold text-cream-100 transition-all hover:bg-espresso-800"
                  >
                    <MessageCircle size={16} />
                    {service.primaryActionLabel}
                  </a>
                  <a
                    href={service.secondaryActionHref}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-espresso-900/15 px-5 py-3 text-sm font-semibold text-espresso-900 transition-all hover:border-gold-400 hover:text-gold-600"
                  >
                    <Phone size={16} />
                    {service.secondaryActionLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
