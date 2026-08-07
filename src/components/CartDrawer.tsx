import { X, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { generateWhatsAppOrderUrl } from '@/lib/whatsapp';
import { RESTAURANT } from '@/data/menu';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();
  const { lang, t } = useLanguage();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const url = generateWhatsAppOrderUrl(items, totalPrice, RESTAURANT.phoneHref);
    window.open(url, '_blank');
    // Optional: clearCart() after redirecting
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-espresso-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream-100 shadow-2xl transition-transform duration-300 sm:w-[400px]">
        <div className="flex items-center justify-between border-b border-espresso-900/10 px-6 py-4 bg-white">
          <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-espresso-900">
            <ShoppingBag size={20} className="text-gold-500" />
            {t('Your Order', 'የእርስዎ ትዕዛዝ')}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-full p-2 text-espresso-400 transition-colors hover:bg-espresso-900/5 hover:text-espresso-900"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-espresso-400">
              <ShoppingBag size={48} className="mb-4 text-espresso-200" />
              <p className="text-lg font-medium text-espresso-600">
                {t('Your cart is empty', 'ቅርጫትዎ ባዶ ነው')}
              </p>
              <p className="mt-1 text-sm">
                {t('Add some delicious dishes to get started!', 'ለመጀመር አንዳንድ ጣፋጭ ምግቦችን ያክሉ!')}
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 rounded-full bg-gold-400 px-6 py-2 text-sm font-bold text-espresso-950 transition-all hover:bg-gold-500"
              >
                {t('Browse Menu', 'ሜኑ ይመልከቱ')}
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-espresso-900">
                        {lang === 'am' && item.nameAm ? item.nameAm : item.name}
                      </h3>
                      <p className="text-sm font-medium text-gold-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-espresso-900/20 bg-white shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-espresso-600 transition-colors hover:text-espresso-900"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-espresso-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-espresso-600 transition-colors hover:text-espresso-900"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-medium text-red-500 hover:text-red-600 hover:underline"
                      >
                        {t('Remove', 'አስወግድ')}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between font-medium text-espresso-900">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-espresso-900/10 bg-white p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="mb-4 flex items-center justify-between text-lg font-bold text-espresso-900">
              <span>{t('Subtotal', 'አጠቃላይ ድምር')}</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#1EBE57] hover:shadow-xl active:scale-95"
            >
              <Send size={18} />
              {t('Order via WhatsApp', 'በዋትስአፕ ይዘዙ')}
            </button>
            <p className="mt-3 text-center text-xs text-espresso-500">
              {t(
                'You will be redirected to WhatsApp to confirm your order.',
                'ትዕዛዝዎን ለማረጋገጥ ወደ ዋትስአፕ ይመራሉ።'
              )}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
