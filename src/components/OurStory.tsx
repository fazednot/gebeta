export default function OurStory() {
  return (
    <section id="story" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/photo-coffee-ceremony.jpg"
              alt="Traditional Ethiopian coffee ceremony — jebena pot on tray with incense and warm bokeh"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-2xl border-8 border-espresso-950 bg-gold-400 p-6 text-center md:flex md:flex-col md:items-center md:justify-center">
              <span className="font-serif text-4xl font-bold text-espresso-950">100%</span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-espresso-800">
                Authentic Recipes
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-cream-100 md:text-5xl">
              A Taste of Home, Shared With You
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-200/75">
              <p>
                At Gebeta, we bring the heart of Ethiopian cuisine to Minnesota. Every dish is
                crafted with authentic spices — berbere, mitmita, and niter kibbeh — imported
                directly from Ethiopia and blended in-house.
              </p>
              <p>
                Our restaurant is built on the Ethiopian tradition of <em>gebeta</em> — the large
                sharing platter where family and friends gather around a single meal. We believe
                food is more than sustenance; it is connection, community, and celebration.
              </p>
              <p>
                From the first spoon of <em>shiro</em> to the final cup of coffee from our
                traditional ceremony, we invite you to experience the warmth of Ethiopian
                hospitality. Fresh ingredients, family recipes, and a welcome that feels like
                home.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: 'Authentic Cuisine', value: 'Traditional' },
                { label: 'Family Atmosphere', value: 'Welcoming' },
                { label: 'Fresh Ingredients', value: 'Daily' },
                { label: 'Coffee Ceremony', value: 'Weekly' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-cream-100/10 p-4">
                  <p className="font-serif text-lg font-semibold text-gold-400">{item.value}</p>
                  <p className="mt-1 text-xs text-cream-200/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
