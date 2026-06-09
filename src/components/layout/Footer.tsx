import { siteContent } from "@/data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();
  const { footer } = siteContent;

  return (
    <footer className="border-t border-[rgba(139,63,92,0.14)] pb-12 pt-8">
      <div className="page-shell text-center text-sm text-black">
        <p className="mx-auto">
          © {year} {footer.copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
