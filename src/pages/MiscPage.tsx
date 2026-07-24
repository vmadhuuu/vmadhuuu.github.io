import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

type GalleryImage = {
  fileName: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    fileName: "IMG_6073.JPG",
    alt: "Bharatanatyam portrait in purple and pink costume",
  },
  {
    fileName: "IMG_6078.jpg",
    alt: "Bharatanatyam portrait with expressive hand gestures",
  },
  { fileName: "IMG_6080.JPG", alt: "Bharatanatyam seated pose on stage" },
  {
    fileName: "IMG_6081.JPG",
    alt: "Bharatanatyam portrait in traditional red and green costume",
  },
  {
    fileName: "IMG_6083.JPG",
    alt: "Bharatanatyam portrait with poised hand gesture",
  },
  {
    fileName: "IMG_6084.JPG",
    alt: "Bharatanatyam portrait with smiling expression",
  },
  {
    fileName: "IMG_6085.JPG",
    alt: "Bharatanatyam full-body pose under purple stage lights",
  },
  {
    fileName: "IMG_6086.JPG",
    alt: "Bharatanatyam standing pose with raised arms",
  },
  { fileName: "IMG_6087.JPG", alt: "Bharatanatyam expression portrait" },
  {
    fileName: "1 (181).jpg",
    alt: "Bharatanatyam portrait in motion with dramatic lighting",
  },
  { fileName: "1 (204).jpg", alt: "Close portrait with dance hand framing" },
  {
    fileName: "1 (231).jpg",
    alt: "Full-body Bharatanatyam pose in blue light",
  },
  { fileName: "1 (260).jpg", alt: "Stage portrait under spotlight" },
  { fileName: "1 (276).jpg", alt: "Seated Bharatanatyam pose with lifted leg" },
  {
    fileName: "1 (291).jpg",
    alt: "Black and white Bharatanatyam stage portrait",
  },
  {
    fileName: "1 (319).jpg",
    alt: "Purple and pink close-up portrait with gesture",
  },
  {
    fileName: "1 (364).jpg",
    alt: "Close-up dance portrait in green and red costume",
  },
  { fileName: "1 (399).jpg", alt: "Soft pink-lit close portrait" },
];

const autoplayDelayMs = 4000;

function getImagePath(fileName: string) {
  return `${import.meta.env.BASE_URL}misc-gallery/${encodeURIComponent(fileName)}`;
}

export function MiscPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % galleryImages.length,
      );
    }, autoplayDelayMs);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <FadeIn className="self-start">
        <div className="max-w-xl">
          <h1 className="mt-5 text-4xl leading-tight text-[#8b3f5c] sm:text-5xl">
            A quieter, more{" "}
            <span className="signature-name text-[3.4rem] text-[#8b3f5c] sm:text-[4.5rem]">
              artistic
            </span>{" "}
            corner
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-8 text-black">
            Beyond research, dance and music are a huge part of how I express
            myself. Here are some pictures and my YouTube page for more
            performances!
          </p>

          <div className="mt-8 rounded-[28px] border border-[rgba(139,63,92,0.14)] bg-white p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#8b3f5c]">
              YouTube
            </p>
            <a
              href="https://www.youtube.com/@madhumithav1024"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-[#8b3f5c] transition hover:text-accent"
            >
              madhumithav1024
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-sm leading-7 text-black">
              Dance and music videos live here!
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section>
          <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-[28px] border-2 border-[#8b3f5c] bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage.fileName}
                src={getImagePath(activeImage.fileName)}
                alt={activeImage.alt}
                className="h-full w-full object-contain"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
