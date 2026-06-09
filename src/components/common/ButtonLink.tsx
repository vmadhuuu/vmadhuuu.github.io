import type { ReactNode } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: 'arrow' | 'download';
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  icon,
  className,
}: ButtonLinkProps) {
  const isInternalRoute = href.startsWith('/') && !href.includes('.');
  const classes = cn(
    variant === 'primary' ? 'button-primary' : 'button-secondary',
    'gap-2',
    className,
  );

  const iconNode =
    icon === 'arrow' ? <ArrowRight className="h-4 w-4" /> : icon === 'download' ? <Download className="h-4 w-4" /> : null;

  if (isInternalRoute) {
    return (
      <Link className={classes} to={href}>
        <span>{children}</span>
        {iconNode}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      download={href.endsWith('.pdf') ? true : undefined}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      {iconNode}
    </a>
  );
}
