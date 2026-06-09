import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  action?: ReactNode;
}

export function SectionHeader({ title, action }: SectionHeaderProps) {
  return (
    <div className="mb-7 flex items-center gap-4">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <h2 className="shrink-0 font-sans text-[2rem] leading-tight sm:text-[2.2rem]">{title}</h2>
        <div className="h-px flex-1 bg-[rgba(139,63,92,0.18)]" />
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
