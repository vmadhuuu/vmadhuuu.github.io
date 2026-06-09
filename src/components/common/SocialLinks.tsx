import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink } from '@/types/content';
import { cn } from '@/lib/utils';

const iconMap = {
  mail: Mail,
  scholar: BookOpen,
  github: Github,
  linkedin: Linkedin,
} as const;

const colorMap = {
  mail: 'bg-[rgba(139,63,92,0.08)] text-[#8b3f5c] hover:bg-[rgba(139,63,92,0.14)]',
  scholar: 'bg-[rgba(139,63,92,0.08)] text-[#8b3f5c] hover:bg-[rgba(139,63,92,0.14)]',
  github: 'bg-[rgba(139,63,92,0.08)] text-[#8b3f5c] hover:bg-[rgba(139,63,92,0.14)]',
  linkedin: 'bg-[rgba(139,63,92,0.08)] text-[#8b3f5c] hover:bg-[rgba(139,63,92,0.14)]',
} as const;

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-200 hover:-translate-y-0.5',
              colorMap[link.icon],
            )}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon className="h-[18px] w-[18px]" />
            <span className="sr-only">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
