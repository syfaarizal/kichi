import { DiscordSVG } from './DiscordIcon';
import { ArrowRightIcon, ChatIcon, CompassIcon, SparkIcon } from './ThemeIcons';

const steps = [
  {
    icon: <DiscordSVG width={18} height={14} fill="#7289da" />,
    title: 'Invite Kichi',
    desc: 'Click "Add to Discord" and authorize Kichi with the required permissions. Takes less than 30 seconds.',
    detail: 'OAuth2 + Discord Permissions',
    col: 'rgba(245,158,11',
  },
  {
    icon: <ChatIcon size={18} color="#818cf8" />,
    title: 'Chat with Kichi',
    desc: 'Tag @Kichi or reply to her messages. No slash command needed - just talk like you would to a friend.',
    detail: 'Mention and Reply Handler',
    col: 'rgba(88,101,242',
  },
  {
    icon: <ArrowRightIcon size={18} color="#c084fc" strokeWidth={2.2} />,
    title: 'Use Commands',
    desc: 'Run /ask-ai, /lyrics, /join, /reminder and more. Admins can set up automated reminders for the whole server.',
    detail: '10+ Slash Commands',
    col: 'rgba(168,85,247',
  },
  {
    icon: <SparkIcon size={18} color="#2dd4bf" />,
    title: 'Enjoy AI Features',
    desc: "Kichi remembers you, roasts you, reminds you, sings lyrics, and talks in voice. She's your server's AI bestie.",
    detail: 'Per-User Memory + TTS',
    col: 'rgba(20,184,166',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 z-[1]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,.04), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="pill pill-purple inline-flex items-center gap-2">
            <CompassIcon size={14} color="currentColor" />
            How It Works
          </span>
          <h2
            className="font-bold leading-tight mt-3 mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Up and Running
            <br />
            <span className="purple-text">In Under 60 Seconds</span>
          </h2>
          <p className="text-slate-500 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            No config files. No self-hosting required. Just invite, chat, and let Kichi do her thing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, rgba(245,158,11,.2), rgba(168,85,247,.2), rgba(20,184,166,.2))' }}
          />

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="glass reveal rounded-[1.25rem] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 relative group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.25rem]"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.col},.06), transparent 70%)` }}
              />

              <div
                className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center relative"
                style={{
                  background: `${s.col},.12)`,
                  border: `2px solid ${s.col},.4)`,
                }}
              >
                {s.icon}
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[0.65rem] font-black flex items-center justify-center"
                  style={{
                    background: `${s.col},.9)`,
                    color: '#050810',
                  }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="font-heading text-sm font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-500 text-[0.82rem] leading-relaxed mb-3">{s.desc}</p>

              <span
                className="inline-block font-mono text-[0.65rem] px-2.5 py-1 rounded-full"
                style={{
                  background: `${s.col},.08)`,
                  border: `1px solid ${s.col},.22)`,
                  color: `${s.col},.9)`,
                }}
              >
                {s.detail}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-slate-700 text-sm">
          Already a developer?{' '}
          <a href="#" className="text-amber-400 font-semibold no-underline hover:underline ml-1">
            Self-host with Node.js + PM2 &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
