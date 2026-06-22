import { DiscordSVG } from './DiscordIcon';
import { AnchorIcon, ArrowRightIcon, SparkIcon } from './ThemeIcons';

const ctaFeatures = [
  'Free to use',
  'No self-hosting required',
  'Setup in under 60 seconds',
  'Built by Kai Shi',
];

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 text-center z-[1]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(88,101,242,.12), rgba(245,158,11,.06), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="reveal">
          <span className="pill inline-flex items-center gap-2" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <AnchorIcon size={14} color="currentColor" />
            Ready to Join?
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
            useful - your server deserves better than a basic bot.
          </p>

          <a
            href="https://discord.com/oauth2/authorize?client_id=1480203870331343090&permissions=37100864&integration_type=0&scope=bot+applications.commands"
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
            <ArrowRightIcon size={16} color="currentColor" strokeWidth={2.5} />
          </a>

          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {ctaFeatures.map((feat) => (
              <span key={feat} className="flex items-center gap-1.5 text-sm text-slate-500">
                <SparkIcon size={12} color="rgba(245,158,11,.75)" strokeWidth={2} />
                {feat}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 justify-center mt-12">
            <div
              className="h-px w-20"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(245,158,11,.3))',
              }}
            />
            <AnchorIcon size={16} color="rgba(245,158,11,.45)" strokeWidth={2} />
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
