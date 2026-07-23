import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

export default function VisitUs() {
  return (
    <section id="visit" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
            Come Join Us
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-100 md:text-5xl">
            Visit Gebeta
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Gebeta Restaurant location map"
              src={RESTAURANT.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-cream-100/10 bg-espresso-900/50 p-6">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-gold-400" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream-100">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-200/70">
                    {RESTAURANT.address.street}
                    <br />
                    {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
                  </p>
                  <a
                    href={RESTAURANT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-gold-400 hover:text-gold-500"
                  >
                    Get directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cream-100/10 bg-espresso-900/50 p-6">
              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 shrink-0 text-gold-400" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream-100">Phone</h3>
                  <a
                    href={RESTAURANT.phoneHref}
                    className="mt-1 block text-sm text-cream-200/70 hover:text-gold-400"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cream-100/10 bg-espresso-900/50 p-6">
              <div className="flex items-start gap-4">
                <Clock size={22} className="mt-1 shrink-0 text-gold-400" />
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-cream-100">Opening Hours</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {RESTAURANT.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4 text-cream-200/70">
                        <span>{h.day}</span>
                        <span className={h.hours === 'Closed' ? 'text-red-400/70' : ''}>
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1eb858]"
            >
              <MessageCircle size={20} />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
