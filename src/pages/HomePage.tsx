import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import OurStory from '@/components/OurStory';
import MenuPreview from '@/components/MenuPreview';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import VisitUs from '@/components/VisitUs';
import ReservationCTA from '@/components/ReservationCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function HomePage({ onNavigate, onOpenReservation }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} onOpenReservation={onOpenReservation} />
      <FeaturedDishes />
      <OurStory />
      <MenuPreview onNavigate={onNavigate} />
      <Gallery />
      <Testimonials />
      <ReservationCTA onOpenReservation={onOpenReservation} />
      <VisitUs />
    </>
  );
}
