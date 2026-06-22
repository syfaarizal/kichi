import { DiscordSVG } from './DiscordIcon';

const ctaFeatures = [
  'Free to use',
  'No self-hosting required',
  'Setup in under 60 seconds',
  'Built by Kai Shi',
];

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 text-center z-[1]">
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(88,101,242,.12), rgba(245,158,11,.06), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="reveal">
          <span className="pill" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            ⚓ Ready to Join?
          </span>

          <h2
            className="font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Invite Kichi to
            <br />
            <span className="gold-text">Your Server Today</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-[560px] mx-auto mb-10">
            Your new favorite AI companion is just a command away. Sarcastic, sharp, and actually
            useful — your server deserves better than a basic bot.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl font-extrabold text-lg text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #5865F2, #7289da)',
              border: '1px solid rgba(88,101,242,.5)',
              boxShadow: '0 4px 24px rgba(88,101,242,.35)',
              padding: '1.1rem 2.5rem',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 40px rgba(88,101,242,.55)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(88,101,242,.35)';
            }}
          >
            <DiscordSVG width={22} height={17} />
            Add Kichi to Discord
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Feature bullets */}
          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {ctaFeatures.map((feat) => (
              <span key={feat} className="flex items-center gap-1.5 text-sm text-slate-500">
                <span style={{ color: 'rgba(245,158,11,.5)' }}>✦</span>
                {feat}
              </span>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 justify-center mt-12">
            <div
              className="h-px w-20"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(245,158,11,.3))',
              }}
            />
            <span style={{ color: 'rgba(245,158,11,.35)', fontSize: '1.2rem' }}>⚓</span>
            <div
              className="h-px w-20"
              style={{
                background: 'linear-gradient(90deg, rgba(245,158,11,.3), transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
