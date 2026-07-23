import { useState, useCallback, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollManager from '@/components/ScrollManager';
import ReservationModal from '@/components/ReservationModal';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';

function parsePath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function parseQuery(path: string): Record<string, string> {
  const qIndex = path.indexOf('?');
  if (qIndex === -1) return {};
  const params = new URLSearchParams(path.slice(qIndex + 1));
  const result: Record<string, string> = {};
  params.forEach((v, k) => {
    result[k] = v;
  });
  return result;
}

export default function App() {
  const [path, setPath] = useState<string>(parsePath());
  const [reservationOpen, setReservationOpen] = useState(false);

  const openReservation = useCallback(() => setReservationOpen(true), []);
  const closeReservation = useCallback(() => setReservationOpen(false), []);

  useEffect(() => {
    const onHashChange = () => setPath(parsePath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((target: string) => {
    window.location.hash = target;
  }, []);

  const basePath = path.split('?')[0];
  const query = parseQuery(path);

  let page;
  if (basePath === '/menu') {
    page = <MenuPage initialCategory={query.cat} onNavigate={navigate} onOpenReservation={openReservation} />;
  } else {
    page = <HomePage onNavigate={navigate} onOpenReservation={openReservation} />;
  }

  return (
    <div className="min-h-screen bg-cream-100 font-sans text-espresso-900 antialiased">
      <Navbar currentPath={basePath} onNavigate={navigate} onOpenReservation={openReservation} />
      <main>{page}</main>
      <Footer onNavigate={navigate} onOpenReservation={openReservation} />
      <ScrollManager path={path} />
      <ReservationModal open={reservationOpen} onClose={closeReservation} />
    </div>
  );
}
