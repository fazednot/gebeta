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
  phone: '(651) 350-7822',
  altPhone: '(952) 220-5927',
  phoneHref: 'tel:+16513507822',
  whatsapp: 'https://wa.me/16513507822',
  address: {
    street: '1049 Dodd Rd',
    city: 'West St Paul',
    state: 'MN',
    zip: '55118',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1049+Dodd+Rd+West+St+Paul+MN+55118',
  mapsEmbed:
    'https://www.google.com/maps?q=1049+Dodd+Rd+West+St+Paul+MN+55118&output=embed',
  hours: [
    { day: 'Monday', hours: '11:30 AM – 10:00 PM' },
    { day: 'Tuesday', hours: '11:30 AM – 10:00 PM' },
    { day: 'Wednesday', hours: 'Closed' },
    { day: 'Thursday', hours: '11:30 AM – 10:00 PM' },
    { day: 'Friday', hours: '11:30 AM – 10:00 PM' },
    { day: 'Saturday', hours: '11:30 AM – 10:00 PM' },
    { day: 'Sunday', hours: '11:30 AM – 10:00 PM' },
  ],
  social: {
    instagram: 'https://www.instagram.com/gebetaethiopian/',
    facebook: 'https://www.facebook.com/',
  },
};

import menuData from '@/data/menu.json';

export const menu: MenuData = menuData as unknown as MenuData;

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getCategoryName(categoryId: string): string {
  const category = menu.categories.find((c) => c.id === categoryId);
  return category ? category.name : categoryId;
}
