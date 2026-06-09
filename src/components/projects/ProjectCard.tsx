import type { ProjectItem } from '@/types/content';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-medium text-accent">{project.topic}</p>
        <h3 className="mt-2 text-[1.4rem] leading-tight text-black">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[rgba(17,17,17,0.8)]">
          {project.summary}
        </p>
        <p className="mt-3 text-[15px] leading-7 text-[rgba(17,17,17,0.72)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full bg-[rgba(139,63,92,0.08)] px-3 py-1 text-[12px] font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={`${project.id}-${link.label}`}
              href={link.href}
              className="text-[14px] font-medium text-accent hover:underline"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
