import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteContent } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(139,63,92,0.14)] bg-[rgba(255,255,255,0.96)] backdrop-blur-xl">
      <div className="page-shell flex min-h-[78px] items-center gap-6 py-3">
        {!isHomePage ? (
          <NavLink
            className="signature-name whitespace-nowrap text-4xl text-[#8b3f5c] transition hover:text-accent sm:text-[2.6rem]"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            {siteContent.profile.name}
          </NavLink>
        ) : null}

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {siteContent.navigation.map((item) => (
            <NavItemLink key={item.path} label={item.label} path={item.path} />
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(139,63,92,0.14)] bg-white text-black transition hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[rgba(139,63,92,0.14)] bg-[rgba(255,255,255,0.98)] md:hidden">
          <nav className="page-shell flex flex-col gap-2 py-4">
            {siteContent.navigation.map((item) => (
              <NavItemLink
                key={item.path}
                label={item.label}
                path={item.path}
                mobile
                onNavigate={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

interface NavItemLinkProps {
  label: string;
  path: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

function NavItemLink({ label, path, mobile = false, onNavigate }: NavItemLinkProps) {
  return (
    <NavLink
      to={path}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
          mobile ? 'text-black' : 'text-black',
          isActive ? 'bg-[rgba(139,63,92,0.1)] text-[#8b3f5c]' : 'hover:bg-[rgba(139,63,92,0.05)] hover:text-[#8b3f5c]',
        )
      }
    >
      {label}
    </NavLink>
  );
}
