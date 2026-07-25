import { RESTAURANT } from '@/data/menu';

export interface ServiceOffer {
  id: 'delivery' | 'catering';
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
}

export function buildWhatsAppInquiry(message: string): string {
  return `${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const serviceOffers: ServiceOffer[] = [
  {
    id: 'delivery',
    eyebrow: 'Hot meals at home',
    title: 'Delivery',
    description:
      'Fresh Ethiopian meals packed for the road and ready for lunch, dinner, or busy nights at home.',
    bullets: ['Local delivery available', 'Phone or WhatsApp ordering', 'Packed to stay fresh in transit'],
    primaryActionLabel: 'Order Delivery',
    primaryActionHref: buildWhatsAppInquiry(
      'Hello Gebeta Restaurant! I would like to place a delivery order.'
    ),
    secondaryActionLabel: 'Call to Order',
    secondaryActionHref: RESTAURANT.phoneHref,
  },
  {
    id: 'catering',
    eyebrow: 'For gatherings and events',
    title: 'Catering',
    description:
      'Catering for birthdays, office lunches, church events, and family celebrations of every size.',
    bullets: ['Great for groups', 'Flexible tray orders', 'Ideal for meetings and special events'],
    primaryActionLabel: 'Ask About Catering',
    primaryActionHref: buildWhatsAppInquiry(
      'Hello Gebeta Restaurant! I would like to ask about catering for an upcoming event.'
    ),
    secondaryActionLabel: 'Call Catering',
    secondaryActionHref: RESTAURANT.phoneHref,
  },
];
