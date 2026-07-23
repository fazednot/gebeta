import { useState, useEffect } from 'react';
import { X, CalendarDays, Users, Phone, Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { insertReservation } from '@/lib/sqliteDb';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { RESTAURANT } from '@/data/menu';

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ReservationModal({ open, onClose }: ReservationModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [waUrl, setWaUrl] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    partySize: '2',
    date: '',
    time: '',
    notes: '',
  });

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrorMsg('');
      setWaUrl('');
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const reservationData = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        party_size: parseInt(form.partySize, 10),
        date: form.date,
        time: form.time,
        notes: form.notes.trim() || null,
      };

      await insertReservation(reservationData);

      const generatedUrl = generateWhatsAppUrl(reservationData);
      setWaUrl(generatedUrl);

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us instead.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close reservation form"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-espresso-600 transition-colors hover:bg-espresso-900/10 hover:text-espresso-900"
        >
          <X size={22} />
        </button>

        {status === 'success' ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 size={36} className="text-green-600" />
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-espresso-900">
              Request Saved!
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-espresso-700">
              Thank you, {form.name.split(' ')[0]}. Your reservation has been recorded. Tap below to send this request directly to our host team via WhatsApp.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3">
              {waUrl && (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#1ebd59] shadow-md hover:shadow-lg"
                >
                  <MessageSquare size={20} />
                  Send Request via WhatsApp
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full border border-espresso-900/20 px-8 py-3 text-base font-medium text-espresso-800 transition-all hover:bg-espresso-900/5"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600">
              Book a Table
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-espresso-900">
              Request a Reservation
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-espresso-600">
              Submit your request below and we will call to confirm. For same-day reservations,
              please call {RESTAURANT.phone}.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Field label="Full Name" icon={<User size={16} />}>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all placeholder:text-espresso-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" icon={<Phone size={16} />}>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="(612) 555-0000"
                    className="w-full rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all placeholder:text-espresso-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </Field>
                <Field label="Email (optional)" icon={<Mail size={16} />}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all placeholder:text-espresso-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Party Size" icon={<Users size={16} />}>
                  <select
                    value={form.partySize}
                    onChange={(e) => handleChange('partySize', e.target.value)}
                    className="w-full appearance-none rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" icon={<CalendarDays size={16} />}>
                  <input
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </Field>
                <Field label="Time" icon={<CalendarDays size={16} />}>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className="w-full rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </Field>
              </div>

              <Field label="Special Requests (optional)" icon={<MessageSquare size={16} />}>
                <textarea
                  value={form.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Allergies, seating preferences, celebrations..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-espresso-900/15 bg-white py-3 pl-11 pr-4 text-base text-espresso-900 outline-none transition-all placeholder:text-espresso-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                />
              </Field>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-base font-semibold text-espresso-950 transition-all hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Request Table'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-espresso-700">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-espresso-400">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}
