import { useEffect, useState } from 'react';
import { DiscordSVG } from './DiscordIcon';
import { AnchorIcon } from './ThemeIcons';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(5,8,16,.92)',
              backdropFilter: 'blur(18px)',
              borderBottom: '1px solid rgba(245,158,11,.08)',
              boxShadow: '0 4px 30px rgba(0,0,0,.5)',
            }
          : undefined
      }
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px] px-8">
        <a
          href="#hero"
          className="flex items-center gap-2.5 cursor-pointer no-underline"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
        >
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[1.1rem]"
            style={{ background: 'linear-gradient(135deg, #b45309, #f59e0b)' }}
          >
            <AnchorIcon size={16} color="#ffffff" />
          </div>
          <span className="font-display text-xl font-bold text-white">Kichi</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="relative text-slate-400 text-sm font-medium cursor-pointer bg-transparent border-none pb-0.5 transition-colors duration-200 hover:text-amber-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-250" />
            </button>
          ))}
        </div>

        <a
          href="#"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #5865F2, #7289da)',
            border: '1px solid rgba(88,101,242,.5)',
            boxShadow: '0 4px 18px rgba(88,101,242,.35)',
          }}
        >
          <DiscordSVG width={16} height={12} />
          Add to Discord
        </a>

        <button
          className="md:hidden bg-transparent border-none text-slate-400 cursor-pointer p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-1 px-6 pb-6 pt-2"
          style={{
            background: 'rgba(9,13,26,.97)',
            borderBottom: '1px solid rgba(245,158,11,.08)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="py-3 px-4 text-left text-slate-400 text-sm rounded-lg transition-all duration-200 hover:text-amber-300 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#"
            className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white text-sm"
            style={{
              background: 'linear-gradient(135deg, #5865F2, #7289da)',
              border: '1px solid rgba(88,101,242,.5)',
              boxShadow: '0 4px 18px rgba(88,101,242,.35)',
            }}
          >
            <DiscordSVG width={16} height={12} />
            Add to Discord
          </a>
        </div>
      )}
    </nav>
  );
}
