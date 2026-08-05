import { useLanguage } from '@/context/LanguageContext';

export default function OurStory() {
  const { lang, t } = useLanguage();

  return (
    <section id="story" className="bg-espresso-950 py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Container with Uncropped Framing */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-cream-100/10 bg-espresso-900 shadow-2xl">
              <img
                src="/real-restaurant-interior.jpg"
                alt="Gebeta Restaurant spacious interior dining room with traditional ceiling artwork and seating"
                loading="lazy"
                className="w-full object-contain max-h-[600px] bg-black/30 p-1 transition-transform duration-500 hover:scale-102"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-2xl border-8 border-espresso-950 bg-gold-400 p-6 text-center md:flex md:flex-col md:items-center md:justify-center shadow-xl">
              <span className="font-serif text-4xl font-bold text-espresso-950">100%</span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-espresso-800">
                {t('Authentic Recipes', 'እውነተኛ የምግብ አሰራር')}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
              {t('Our Story', 'ታሪካችን')}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-cream-100 md:text-5xl">
              {t('A Taste of Home, Shared With You', 'የሀገር ቤት ጣዕም፣ ከአንተ ጋር የተጋራ')}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-200/75">
              <p>
                {t(
                  'At Gebeta, we bring the heart of Ethiopian cuisine to Minnesota. Every dish is crafted with authentic spices — berbere, mitmita, and niter kibbeh — imported directly from Ethiopia and blended in-house.',
                  'በገበታ፣ የኢትዮጵያ ምግብን ልብ ወደ ሚኒሶታ እናመጣለን። እያንዳንዱ ምግብ ከኢትዮጵያ በቀጥታ በሚመጡና በቤት ውስጥ በሚዘጋጁ እውነተኛ ቅመማ ቅመሞች — በርበሬ፣ ሚጥሚጣ እና ኒተር ቅቤ የተዘጋጀ ነው።'
                )}
              </p>
              <p>
                {t(
                  'Our restaurant is built on the Ethiopian tradition of gebeta — the large sharing platter where family and friends gather around a single meal. We believe food is more than sustenance; it is connection, community, and celebration.',
                  'ሬስቶራንታችን በኢትዮጵያውያን የገበታ ባህል ላይ የተገነባ ነው — ቤተሰብና ወዳጆች በአንድ ምግብ ዙሪያ የሚሰበሰቡበት ትልቅ የጋራ ገበታ። ምግብ ከአካላዊ እርካታ በላይ እንደሆነ እናምናለን፤ እሱ ትስስር፣ ማህበረሰብ እና በዓል ነው።'
                )}
              </p>
              <p>
                {t(
                  'From the first spoon of shiro to the final cup of coffee from our traditional ceremony, we invite you to experience the warmth of Ethiopian hospitality. Fresh ingredients, family recipes, and a welcome that feels like home.',
                  'ከመጀመሪያው የሺሮ ማንኪያ ጀምሮ እስከ ባህላዊ የቡና ሥነ-ሥርዓታችን የመጨረሻ ሲኒ፣ የኢትዮጵያውያንን እንግዶችን የመቀበል ሞቅ ያለ ባህል እንድትለማመዱ እንጋብዝሃለን። ትኩስ ግብአቶች፣ የቤተሰብ አሰራር፣ እና እንደ ሀገር ቤት የሚሰማ አቀባበል።'
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: t('Authentic Cuisine', 'እውነተኛ ምግብ'), value: t('Traditional', 'ባህላዊ') },
                { label: t('Family Atmosphere', 'የቤተሰብ वातावरण'), value: t('Welcoming', 'ሞቅ ያለ') },
                { label: t('Fresh Ingredients', 'ትኩስ ግብአቶች'), value: t('Daily', 'በየቀኑ') },
                { label: t('Coffee Ceremony', 'የቡና ሥነ-ሥርዓት'), value: t('Weekly', 'በየሳምንቱ') },
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
