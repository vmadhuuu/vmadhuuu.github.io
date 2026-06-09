import type { CvEntry } from '@/types/content';

interface CvSectionCardProps {
  title: string;
  items: CvEntry[];
}

export function CvSectionCard({ title, items }: CvSectionCardProps) {
  return (
    <section className="panel p-6 sm:p-7">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <article key={`${title}-${item.title}-${item.period}`} className="border-b border-slate-200/70 pb-6 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 font-medium text-ink">{item.subtitle}</p>
              </div>
              <p className="text-sm font-semibold text-accent">{item.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="copy">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

