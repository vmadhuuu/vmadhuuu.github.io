import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteContent } from "@/data/siteContent";

export function NewsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleNews = showAll ? siteContent.news : siteContent.news.slice(0, 5);

  return (
    <section className="section-space">
      <div className="px-2 sm:px-6 lg:px-10 xl:px-10">
        <SectionHeader
          title={
            <>
              <span className="font-display">News</span>
            </>
          }
        />

        <div className="mt-8 space-y-4">
          {visibleNews.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="flex gap-5 border-b border-slate-200/80 pb-4"
            >
              <div className="w-24 shrink-0 text-[12px] font-medium text-accent">
                {item.date}
              </div>
              <div>
                <p className="text-[13px] font-medium text-black">
                  {item.title}
                </p>
                {item.description ? (
                  <p className="mt-1 text-[13px] leading-6 text-black">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {siteContent.news.length > 5 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[14px] font-medium text-accent hover:underline"
            >
              {showAll ? "Show less" : "View all news →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
