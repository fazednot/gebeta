import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import OurStory from '@/components/OurStory';
import CookingClasses from '@/components/CookingClasses';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import VisitUs from '@/components/VisitUs';
import ReservationCTA from '@/components/ReservationCTA';
import ScrollReveal from '@/components/ScrollReveal';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenReservation: () => void;
}

export default function HomePage({ onNavigate, onOpenReservation }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} onOpenReservation={onOpenReservation} />

      <ScrollReveal>
        <FeaturedDishes onNavigate={onNavigate} />
      </ScrollReveal>

      <ScrollReveal>
        <OurStory />
      </ScrollReveal>

      <ScrollReveal>
        <CookingClasses />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <ReservationCTA onOpenReservation={onOpenReservation} onNavigate={onNavigate} />
      </ScrollReveal>

      <ScrollReveal>
        <VisitUs />
      </ScrollReveal>
    </>
  );
}
