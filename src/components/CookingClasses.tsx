import { Clock, Users, ChefHat, MessageCircle } from 'lucide-react';
import { RESTAURANT } from '@/data/menu';

const classes = [
  {
    id: 'intro-injera',
    icon: ChefHat,
    title: 'Intro to Injera',
    level: 'Beginner',
    duration: '2 hours',
    spots: 'Up to 8 guests',
    description:
      'Learn the ancient art of fermenting and cooking injera — the spongy sourdough flatbread that is the foundation of every Ethiopian meal. Walk away with the recipe and your first batch.',
    includes: ['Teff flour & starter kit', 'Recipe card to take home', 'Traditional coffee after class'],
  },
  {
    id: 'spice-stew',
    icon: ChefHat,
    title: 'Spice & Stew Mastery',
    level: 'Intermediate',
    duration: '3 hours',
    spots: 'Up to 6 guests',
    description:
      'Dive deep into berbere, mitmita, and niter kibbeh — the holy trinity of Ethiopian cooking. You will prepare two signature stews from scratch and sit down to eat your own creation.',
    includes: ['Full spice blending session', 'Two stews cooked from scratch', 'Sit-down meal with injera'],
  },
  {
    id: 'full-ceremony',
    icon: ChefHat,
    title: 'Full Ceremony Experience',
    level: 'Immersive',
    duration: '4 hours',
    spots: 'Up to 10 guests',
    description:
      'The complete Gebeta experience: cook a full spread of wots, attend a traditional Ethiopian coffee ceremony with roasting, and share the meal communally on a gebeta platter.',
    includes: ['Full meal prep (5+ dishes)', 'Traditional coffee ceremony', 'Communal gebeta feast', 'Ideal for groups & events'],
  },
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-emerald-400/15 text-emerald-300',
  Intermediate: 'bg-gold-400/15 text-gold-300',
  Immersive: 'bg-red-400/15 text-red-300',
};

export default function CookingClasses() {
  const whatsappBase = `https://wa.me/${RESTAURANT.phone.replace(/\D/g, '')}`;

  return (
    <section id="cooking-classes" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">

        {/* Header */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
              Learn with Us
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-cream-100 md:text-5xl">
              Ethiopian Cooking Classes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-200/70">
              Join our chefs in the kitchen for a hands-on experience. Whether you're a curious
              beginner or an experienced home cook, we have a class built around you. All sessions
              are held at Gebeta Restaurant — inquire via WhatsApp to book.
            </p>
            <a
              href={`${whatsappBase}?text=Hi%20Gebeta!%20I'm%20interested%20in%20booking%20a%20cooking%20class.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-base font-semibold text-espresso-950 transition-all hover:bg-gold-500"
            >
              <MessageCircle size={18} />
              Inquire via WhatsApp
            </a>
          </div>

          {/* Side image */}
          <div className="hidden overflow-hidden rounded-2xl lg:block">
            <img
              src="/photo-fasting-platter.jpg"
              alt="Full Ethiopian fasting platter — eight colorful stews on injera"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Class cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classes.map((cls) => {
            const Icon = cls.icon;
            const msg = encodeURIComponent(
              `Hi Gebeta! I'd like to book the "${cls.title}" cooking class.`
            );
            return (
              <article
                key={cls.id}
                className="flex flex-col rounded-2xl border border-cream-100/10 bg-espresso-900/40 p-6 transition-all hover:border-gold-400/40 hover:bg-espresso-900/60"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400">
                    <Icon size={20} />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[cls.level]}`}>
                    {cls.level}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-semibold text-cream-100">
                  {cls.title}
                </h3>

                {/* Meta */}
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-cream-200/60">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {cls.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} />
                    {cls.spots}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-200/70">
                  {cls.description}
                </p>

                {/* Includes */}
                <ul className="mt-5 space-y-2">
                  {cls.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-cream-200/60">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`${whatsappBase}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/40 py-2.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-400 hover:text-espresso-950"
                >
                  <MessageCircle size={15} />
                  Book This Class
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
