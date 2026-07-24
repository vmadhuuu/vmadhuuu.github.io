import {
  BookOpen,
  Code2,
  FileText,
  Link as LinkIcon,
  MonitorPlay,
  Play,
  Presentation,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PublicationItem } from '@/types/content';

interface PublicationItemCardProps {
  publication: PublicationItem;
  compact?: boolean;
}

export function PublicationItemCard({ publication, compact = false }: PublicationItemCardProps) {
  return (
    <article
      className={cn(
        'rounded-[22px] border border-transparent bg-white px-4 py-5 transition duration-200 sm:px-5',
        'hover:border-[rgba(139,63,92,0.18)] hover:shadow-[0_0_0_1px_rgba(139,63,92,0.06),0_16px_34px_-28px_rgba(139,63,92,0.45)]',
        compact ? 'sm:py-5' : 'sm:py-6',
      )}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {publication.image && (
          <div
            className={cn(
              'overflow-hidden rounded-[18px] border border-[rgba(17,17,17,0.08)] bg-[rgba(248,246,241,0.9)]',
              compact ? 'h-36 w-full sm:h-36 sm:w-60' : 'h-44 w-full sm:h-44 sm:w-72',
            )}
          >
            <img
              src={publication.image}
              alt={publication.imageAlt ?? ''}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-[rgba(139,63,92,0.85)]">
            {publication.category} · {publication.year}
          </p>
          <h3 className={cn('mt-2 leading-tight text-black', compact ? 'text-[1.18rem]' : 'text-[1.42rem]')}>
            {publication.title}
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-black">
            {publication.authors.map((author, index) => (
              <span key={`${publication.title}-${author.name}`}>
                <span className={author.highlight ? 'font-semibold text-black' : 'text-[rgba(17,17,17,0.72)]'}>
                  {author.name}
                </span>
                {index < publication.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="mt-1 text-[15px] text-[rgba(17,17,17,0.62)]">{publication.venue}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {publication.links.map((link) => {
              const LinkBadgeIcon = getPublicationLinkIcon(link.label);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(139,63,92,0.35)] px-3 py-1.5 text-[12px] font-medium text-[#8b3f5c] transition hover:bg-[rgba(139,63,92,0.06)]"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <LinkBadgeIcon className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

function getPublicationLinkIcon(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes('paper')) return FileText;
  if (normalized.includes('video')) return MonitorPlay;
  if (normalized.includes('demo')) return Play;
  if (normalized.includes('code')) return Code2;
  if (normalized.includes('blog')) return BookOpen;
  if (normalized.includes('slides') || normalized.includes('talk')) return Presentation;

  return LinkIcon;
}
