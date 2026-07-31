import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Minneapolis, MN',
    rating: 5,
    text: 'The most authentic Ethiopian food I have had outside of Addis Ababa. The doro wot is incredible and the coffee ceremony is a must-try. The staff treats you like family.',
  },
  {
    name: 'David T.',
    location: 'St. Paul, MN',
    rating: 5,
    text: 'Gebeta is a hidden gem. The veggie combo is colorful, flavorful, and generous. I love the communal dining experience — it brings people together in the best way.',
  },
  {
    name: 'Hanna G.',
    location: 'Bloomington, MN',
    rating: 5,
    text: 'As an Ethiopian living in Minnesota, this is my go-to for a taste of home. The kitfo is prepared perfectly and the injera is always fresh. Highly recommend!',
  },
  {
    name: 'James L.',
    location: 'Edina, MN',
    rating: 5,
    text: 'First time trying Ethiopian food and it was a revelation. The staff patiently explained every dish. The tibs came out sizzling and the flavors were out of this world.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-espresso-900 md:text-5xl">
            What Our Guests Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-espresso-900/5"
            >
              <Quote size={28} className="text-gold-400" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-espresso-700">
                "{t.text}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-gold-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="font-semibold text-espresso-900">{t.name}</p>
                <p className="text-xs text-espresso-500">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
