import { SocialLinks } from "@/components/common/SocialLinks";
import { siteContent } from "@/data/siteContent";

export function HeroSection() {
  const { profile, socialLinks } = siteContent;
  const introParagraphs = profile.intro
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="grid items-start gap-10 pt-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:pt-10">
      <div className="mx-auto w-full max-w-[250px]">
        <div className="aspect-square overflow-hidden rounded-full border border-[rgba(139,63,92,0.14)] bg-white shadow-soft">
          <img
            src={profile.photo}
            alt={`${profile.name} profile placeholder`}
            className="h-full w-full object-cover"
          />
        </div>
        <SocialLinks className="mt-5 justify-center" links={socialLinks} />
      </div>

      <div className="max-w-2xl">
        <h1 className="text-[2.35rem] leading-tight sm:text-[2.8rem]">
          {profile.name}
        </h1>
        {/* <p className="mt-2 text-[15px] font-medium text-black">
          {profile.title} at {profile.university}
        </p> */}
        <div className="mt-5 space-y-4">
          {introParagraphs.map((paragraph, index) => (
            <p
              key={`intro-paragraph-${index}`}
              className={
                index === 0
                  ? "max-w-xl text-[15px] leading-7 text-black"
                  : "copy"
              }
            >
              {renderIntroParagraph(paragraph, profile.introLogos)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderIntroParagraph(
  paragraph: string,
  logos: Record<string, { src: string; alt: string }>,
) {
  return paragraph
    .split(/(\[[a-z0-9-]+\])/gi)
    .filter(Boolean)
    .map((segment, index) => {
      const logoMatch = segment.match(/^\[([a-z0-9-]+)\]$/i);

      if (logoMatch) {
        const logo = logos[logoMatch[1].toLowerCase()];

        if (logo) {
          return (
            <img
              key={`intro-logo-${logoMatch[1]}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="mx-[0.16rem] inline-block h-[1.28em] w-[1.28em] rounded-sm align-[-0.18em] object-contain"
            />
          );
        }
      }

      return <span key={`intro-text-${index}`}>{segment}</span>;
    });
}
