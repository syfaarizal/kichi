import { DiscordSVG } from './DiscordIcon';
import { AnchorIcon } from './ThemeIcons';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'About Kichi', href: '#about' },
];

const botLinks = [
  { label: 'Add to Discord', href: '#' },
  { label: 'Self-Host (Node.js)', href: '#' },
  { label: 'OpenRouter AI', href: '#' },
  { label: 'Piper TTS', href: '#' },
  { label: 'Discord.js', href: '#' },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative z-[1]" style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-12">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[1.1rem]"
                style={{ background: 'linear-gradient(135deg, #b45309, #f59e0b)' }}
              >
                <AnchorIcon size={16} color="#ffffff" />
              </div>
              <span className="font-display text-xl font-bold text-white">Kichi</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-[280px]">
              Your server's sarcastic, Gen Z AI bestie. With per-user memory, smart reminders,
              voice TTS, and lyrics, she is more than a bot.
            </p>

            <div className="flex gap-2.5">
              <a
                href="https://discord.gg/pa9uyMTp7w"
                aria-label="Discord"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200 hover:text-indigo-400"
                style={{
                  background: 'rgba(9,13,26,.5)',
                  border: '1px solid rgba(245,158,11,.14)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(88,101,242,.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,.14)';
                }}
              >
                <DiscordSVG width={16} height={12} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200 hover:text-indigo-400"
                style={{
                  background: 'rgba(9,13,26,.5)',
                  border: '1px solid rgba(245,158,11,.14)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(88,101,242,.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,.14)';
                }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div
              className="font-heading text-[0.7rem] font-bold uppercase tracking-widest mb-4"
              style={{ color: '#f59e0b' }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-600 text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-slate-400 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="font-heading text-[0.7rem] font-bold uppercase tracking-widest mb-4"
              style={{ color: '#818cf8' }}
            >
              Bot Info
            </div>
            <ul className="flex flex-col gap-2">
              {botLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 text-sm no-underline transition-colors duration-200 hover:text-slate-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 py-5"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
        >
          <p className="text-slate-700 text-[0.8rem]">
            Copyright 2026 Kichi (Pirate Helper). Built with{' '}
            <AnchorIcon size={12} color="#7c2d12" /> by{' '}
            <span className="text-slate-600 font-medium">Kai Shi</span>.
          </p>
          <div className="flex items-center gap-4 text-slate-700 text-[0.75rem]">
            <span>Discord.js - Node.js - OpenRouter AI</span>
            <div className="flex items-center gap-1.5">
              <span className="online-dot" />
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
