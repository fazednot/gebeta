export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  featured?: boolean;
}

export interface MenuData {
  categories: MenuCategory[];
  dishes: MenuItem[];
}

export const RESTAURANT = {
  name: 'Gebeta Restaurant',
  tagline: 'Authentic Ethiopian Cuisine',
  phone: '(612) 594-2424',
  phoneHref: 'tel:+16125942424',
  whatsapp: 'https://wa.me/16125942424',
  address: {
    street: '2722 4th Ave S',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55407',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gebeta+Restaurant+Minneapolis+MN',
  mapsEmbed:
    'https://www.google.com/maps?q=2722+4th+Ave+S+Minneapolis+MN+55407&output=embed',
  hours: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '11:00 AM – 9:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM – 9:00 PM' },
    { day: 'Thursday', hours: '11:00 AM – 9:00 PM' },
    { day: 'Friday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '11:00 AM – 10:00 PM' },
    { day: 'Sunday', hours: '11:00 AM – 9:00 PM' },
  ],
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
};

import menuData from '@/data/menu.json';

export const menu: MenuData = menuData as unknown as MenuData;

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getCategoryName(categoryId: string): string {
  return menu.categories.find((c) => c.id === categoryId)?.name ?? categoryId;
}
