import { HeroSection } from '@/components/home/HeroSection';
import { NewsSection } from '@/components/home/NewsSection';
import { SelectedPublicationsSection } from '@/components/home/SelectedPublicationsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <SelectedPublicationsSection />
    </>
  );
}
