import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="page-shell pb-16 pt-8 sm:pt-10">{children}</main>
      <Footer />
    </div>
  );
}
