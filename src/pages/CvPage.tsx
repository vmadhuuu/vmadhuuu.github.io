import { ButtonLink } from "@/components/common/ButtonLink";
import { PageIntro } from "@/components/common/PageIntro";
import { CvSectionCard } from "@/components/cv/CvSectionCard";
import { PublicationItemCard } from "@/components/publications/PublicationItemCard";
import { siteContent } from "@/data/siteContent";

export function CvPage() {
  const { cvSections } = siteContent;

  return (
    <div className="space-y-12">
      <PageIntro
        title="Resume"
        aside={
          <ButtonLink href="/cv-placeholder.pdf" icon="download">
            Download PDF CV
          </ButtonLink>
        }
      />

      <div className="grid gap-6">
        <CvSectionCard title="Education" items={cvSections.education} />
        <CvSectionCard
          title="Research Experience"
          items={cvSections.research}
        />
        <section className="panel p-6 sm:p-7">
          <h2 className="text-2xl">Publications</h2>
          <div className="mt-6 grid gap-4">
            {siteContent.publications.slice(0, 4).map((publication) => (
              <PublicationItemCard
                key={`${publication.title}-cv`}
                compact
                publication={publication}
              />
            ))}
          </div>
        </section>
        <CvSectionCard title="Teaching" items={cvSections.teaching} />
        <CvSectionCard title="Awards & Honors" items={cvSections.awards} />
        <CvSectionCard
          title="Service & Mentorship"
          items={cvSections.service}
        />
      </div>
    </div>
  );
}
