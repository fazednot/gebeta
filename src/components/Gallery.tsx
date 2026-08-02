const galleryImages = [
  {
    src: '/photo-gallery-injera.jpg',
    alt: 'Fresh teff injera bread baking on a traditional hot griddle (mitad)',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/photo-gallery-spices.jpg',
    alt: 'Handcrafted clay bowls filled with red berbere, turmeric, and cardamom spices',
    span: '',
  },
  {
    src: '/photo-gallery-ambiance.jpg',
    alt: 'Warm, upscale Ethiopian restaurant dining room interior with mesob tables',
    span: '',
  },
  {
    src: '/photo-gallery-roasting.jpg',
    alt: 'Roasting green coffee beans in a pan over charcoal during a traditional ceremony',
    span: '',
  },
  {
    src: '/photo-gallery-gomen.jpg',
    alt: 'Fresh sautéed collard greens (gomen) with spiced butter and garlic',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
            Moments at Gebeta
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-100 md:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-200/70">
            Food, ceremony, and the warmth of gathering — a glimpse into the Gebeta experience.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
