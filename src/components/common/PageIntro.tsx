import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  hideBorder?: boolean;
}

export function PageIntro({ eyebrow, title, description, aside, hideBorder = false }: PageIntroProps) {
  return (
    <section
      className={`grid gap-8 pb-10 lg:grid-cols-[1fr_auto] lg:items-end ${
        hideBorder ? '' : 'border-b border-slate-200/70'
      }`}
    >
      <div className="max-w-3xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl copy">{description}</p> : null}
      </div>
      {aside ? <div>{aside}</div> : null}
    </section>
  );
}
