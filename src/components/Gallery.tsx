const galleryImages = [
  {
    src: '/real-gallery-1.jpg',
    alt: 'Gebeta Restaurant dining room and traditional mesob seating area',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/real-gallery-2.jpg',
    alt: 'Authentic Ethiopian food dishes served on woven mesob platter',
    span: '',
  },
  {
    src: '/real-beef-ribs.jpg',
    alt: 'Sizzling Ethiopian beef tibs and ribs with rosemary, peppers, and onions',
    span: '',
  },
  {
    src: '/real-gallery-4.jpg',
    alt: 'Gebeta Restaurant interior decor and cultural artwork',
    span: '',
  },
  {
    src: '/real-gallery-5.jpg',
    alt: 'Traditional Ethiopian combination platter on fresh injera',
    span: 'lg:col-span-2',
  },
  {
    src: '/real-gallery-6.jpg',
    alt: 'Warm family dining experience at Gebeta Restaurant',
    span: '',
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
            Real food, authentic space, and the warmth of gathering — a glimpse into Gebeta Restaurant.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
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
