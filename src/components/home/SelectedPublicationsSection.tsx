import { SectionHeader } from '@/components/common/SectionHeader';
import { PublicationItemCard } from '@/components/publications/PublicationItemCard';
import { siteContent } from '@/data/siteContent';
import { Link } from 'react-router-dom';

export function SelectedPublicationsSection() {
  const featuredPublications = siteContent.publications.filter((publication) => publication.featured).slice(0, 3);

  return (
    <section className="section-space">
      <SectionHeader
        title={
          <>
            <span className="font-sans">Select</span>{' '}
            <span className="font-display">Publications</span>
          </>
        }
        action={
          <Link className="text-[14px] font-medium text-accent hover:underline" to="/publications">
            View all
          </Link>
        }
      />

      <div className="grid gap-4">
        {featuredPublications.map((publication) => (
          <PublicationItemCard key={publication.title} compact publication={publication} />
        ))}
      </div>
    </section>
  );
}
