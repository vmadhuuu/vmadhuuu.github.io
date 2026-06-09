import type { ProjectItem } from '@/types/content';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-[1.4rem] leading-tight text-black">{project.title}</h3>
          <p className="mt-2 text-[14px] font-medium text-accent">
            {project.venue} · {project.year}
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[rgba(17,17,17,0.72)]">
            {project.authors.map((author, index) => (
              <span key={`${project.id}-${author.name}`}>
                <span className={author.highlight ? 'font-semibold text-black' : undefined}>
                  {author.name}
                </span>
                {index < project.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>

        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white p-2">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </article>
  );
}
