export interface WhatsAppReservationData {
  name: string;
  phone: string;
  email?: string | null;
  party_size: number;
  date: string;
  time: string;
  notes?: string | null;
}

export function generateWhatsAppUrl(
  data: WhatsAppReservationData,
  restaurantPhone: string = '251961052926'
): string {
  const cleanPhone = restaurantPhone.replace(/[^\d]/g, '');

  const text = [
    'Hello Gebeta Restaurant! 👋 I would like to request a table reservation:',
    '',
    `👤 *Name:* ${data.name}`,
    `👥 *Party Size:* ${data.party_size} ${data.party_size === 1 ? 'guest' : 'guests'}`,
    `📅 *Date:* ${data.date}`,
    `⏰ *Time:* ${data.time}`,
    `📞 *Phone:* ${data.phone}`,
    data.email ? `✉️ *Email:* ${data.email}` : null,
    data.notes ? `📝 *Special Requests:* ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
