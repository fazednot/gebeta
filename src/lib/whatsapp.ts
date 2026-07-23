export interface WhatsAppReservationData {
  name: string;
  phone: string;
  email?: string | null;
  party_size: number;
  date: string;
  time: string;
  notes?: string | null;
}

export async function sendWhatsAppNotification(
  data: WhatsAppReservationData,
  customPhone?: string,
  customApiKey?: string
): Promise<{ success: boolean; message: string }> {
  const phone = (customPhone || import.meta.env.VITE_CALLMEBOT_PHONE || '').trim();
  const apiKey = (customApiKey || import.meta.env.VITE_CALLMEBOT_API_KEY || '').trim();

  if (!phone || !apiKey || apiKey === 'your_callmebot_api_key_here') {
    const msg = 'CallMeBot WhatsApp notification skipped: Phone or API key not set in environment.';
    console.log(msg);
    return { success: false, message: msg };
  }

  const cleanPhone = phone.replace(/[^\d+]/g, '');

  const text = [
    '📍 *NEW GEBETA TABLE RESERVATION*',
    '',
    `👤 *Customer Name:* ${data.name}`,
    `👥 *Party Size:* ${data.party_size} ${data.party_size === 1 ? 'guest' : 'guests'}`,
    `📅 *Date:* ${data.date}`,
    `⏰ *Time:* ${data.time}`,
    `📞 *Phone:* ${data.phone}`,
    data.email ? `✉️ *Email:* ${data.email}` : null,
    data.notes ? `📝 *Special Requests:* ${data.notes}` : null,
    '',
    '----------------------------------',
    ' Gebeta Restaurant Host System',
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(cleanPhone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apiKey)}`;

  try {
    // CallMeBot endpoint returns text/html response or image redirect
    await fetch(url, { mode: 'no-cors' });
    return { success: true, message: 'WhatsApp notification sent successfully via CallMeBot!' };
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : 'Unknown error during CallMeBot fetch';
    console.error('CallMeBot notification error:', errMessage);
    return { success: false, message: errMessage };
  }
}
