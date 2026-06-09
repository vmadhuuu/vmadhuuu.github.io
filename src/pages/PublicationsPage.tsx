import { FadeIn } from "@/components/common/FadeIn";
import { PageIntro } from "@/components/common/PageIntro";
import { PublicationItemCard } from "@/components/publications/PublicationItemCard";
import { siteContent } from "@/data/siteContent";

export function PublicationsPage() {
  const groupedByYear = [...siteContent.publications]
    .sort((a, b) => b.year - a.year)
    .reduce<Record<number, typeof siteContent.publications>>(
      (groups, publication) => {
        if (!groups[publication.year]) {
          groups[publication.year] = [];
        }
        groups[publication.year].push(publication);
        return groups;
      },
      {},
    );

  return (
    <div className="space-y-14">
      <PageIntro hideBorder title="Publications" />

      <section className="space-y-10">
        {Object.entries(groupedByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, items], groupIndex) => (
            <FadeIn key={year} delay={groupIndex * 0.04}>
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <h2 className="text-3xl">{year}</h2>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-4">
                  {items.map((publication) => (
                    <PublicationItemCard
                      key={`${publication.title}-${publication.venue}`}
                      compact
                      publication={publication}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
      </section>
    </div>
  );
}
