import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    src: '/real-gallery-bar.jpg',
    alt: 'Gebeta Restaurant full bar counter with seating and sports TVs',
    caption: 'Full Service Bar & Seating',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[16/10]',
  },
  {
    src: '/real-gallery-storefront.jpg',
    alt: 'Gebeta Restaurant building entrance and official storefront sign at 1049 Dodd Rd',
    caption: 'Gebeta Restaurant Storefront',
    span: 'lg:col-span-1 lg:row-span-2',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/real-gallery-dining.jpg',
    alt: 'Gebeta Restaurant spacious dining room with cultural ceiling artwork',
    caption: 'Main Dining Room',
    span: 'lg:col-span-1',
    aspect: 'aspect-video',
  },
  {
    src: '/real-beef-ribs.jpg',
    alt: 'Sizzling Ethiopian beef tibs and ribs with rosemary, peppers, and onions',
    caption: 'Sizzling Beef Tibs & Ribs',
    span: 'lg:col-span-1',
    aspect: 'aspect-video',
  },
  {
    src: '/real-gallery-feast.jpg',
    alt: 'Traditional Ethiopian combination platter on fresh injera with 8 stews',
    caption: 'Ethiopian Feast Platter',
    span: 'lg:col-span-2',
    aspect: 'aspect-video',
  },
  {
    src: '/real-gallery-coffee.jpg',
    alt: 'Traditional Ethiopian Jebena coffee ceremony setup',
    caption: 'Jebena Coffee Ceremony',
    span: 'lg:col-span-2',
    aspect: 'aspect-video',
  },
];

export default function Gallery() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
            Moments at Gebeta
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-cream-100 md:text-5xl">
            Photo Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream-200/70">
            Bright, clear, and authentic photos of our restaurant space, dining atmosphere, and signature Ethiopian dishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveLightbox(img.src)}
              className={`group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-espresso-900 shadow-lg cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-contain bg-black/40 p-1 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with Caption & Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold text-cream-100">
                    {img.caption}
                  </span>
                  <span className="rounded-full bg-gold-400/20 p-1.5 text-gold-400 backdrop-blur-md">
                    <Maximize2 size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Uncropped Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-pointer"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="fixed top-6 right-6 z-50 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-bold text-espresso-950 shadow-2xl hover:bg-gold-300"
          >
            Close Fullscreen ✕
          </button>
          <img
            src={activeLightbox}
            alt="Gebeta Gallery Fullscreen Uncropped"
            className="max-h-[92vh] max-w-[95vw] rounded-xl object-contain shadow-2xl mx-auto"
          />
        </div>
      )}
    </section>
  );
}
