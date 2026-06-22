import { DiscordSVG } from './DiscordIcon';
import { BoltIcon, CheckIcon, DatabaseIcon, MemoryIcon, MicIcon, MusicIcon } from './ThemeIcons';

const techs = [
  {
    icon: <DiscordSVG width={18} height={14} fill="#7289da" />,
    name: 'Discord.js',
    role: 'Bot Framework',
    color: '#7289da',
    bg: 'rgba(114,137,218,.08)',
    border: 'rgba(114,137,218,.3)',
  },
  {
    icon: <BoltIcon size={18} color="#68a063" />,
    name: 'Node.js',
    role: 'Runtime',
    color: '#68a063',
    bg: 'rgba(104,160,99,.08)',
    border: 'rgba(104,160,99,.3)',
  },
  {
    icon: <MemoryIcon size={18} color="#f59e0b" />,
    name: 'OpenRouter AI',
    role: 'Language Model',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,.08)',
    border: 'rgba(245,158,11,.3)',
  },
  {
    icon: <MicIcon size={18} color="#c084fc" />,
    name: 'Piper TTS',
    role: 'Text-to-Speech',
    color: '#c084fc',
    bg: 'rgba(192,132,252,.08)',
    border: 'rgba(192,132,252,.3)',
  },
  {
    icon: <MusicIcon size={18} color="#f472b6" />,
    name: 'Genius API',
    role: 'Lyrics Metadata',
    color: '#f472b6',
    bg: 'rgba(244,114,182,.08)',
    border: 'rgba(244,114,182,.3)',
  },
  {
    icon: <DatabaseIcon size={18} color="#34d399" />,
    name: 'JSON Storage',
    role: 'Guild Data',
    color: '#34d399',
    bg: 'rgba(52,211,153,.08)',
    border: 'rgba(52,211,153,.3)',
  },
];

const checks = [
  'Offline Piper TTS - no external API costs for voice',
  'In-memory lyrics cache (6hr TTL) for instant results',
  'PM2-ready for production deployment',
  'Cron-based reminder scheduler, no external services',
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 z-[1]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(52,211,153,.03), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="pill pill-green inline-flex items-center gap-2">
              <BoltIcon size={14} color="currentColor" />
              Built With
            </span>
            <h2
              className="font-bold leading-tight mt-3 mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
            >
              Solid Stack,
              <br />
              <span className="green-text">Real Performance</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Kichi is built on battle-tested tools. Offline TTS means no API bills for voice. JSON storage keeps it lightweight. OpenRouter gives access to frontier AI models without vendor lock-in.
            </p>

            <ul className="flex flex-col gap-3">
              {checks.map((check) => (
                <li key={check} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[0.7rem] text-green-400 font-bold mt-px"
                    style={{
                      background: 'rgba(52,211,153,.15)',
                      border: '1px solid rgba(52,211,153,.3)',
                    }}
                  >
                    <CheckIcon size={10} color="#34d399" strokeWidth={2.4} />
                  </span>
                  {check}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal grid grid-cols-2 gap-3">
            {techs.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl px-5 py-4 flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 group"
                style={{
                  background: 'rgba(9,13,26,.65)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${t.border}`,
                  boxShadow: '0 4px 30px rgba(0,0,0,.4)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: t.bg, border: `1px solid ${t.border}` }}
                >
                  {t.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-heading text-[0.8rem] font-bold" style={{ color: t.color }}>
                    {t.name}
                  </div>
                  <div className="text-[0.7rem] text-slate-600 mt-0.5">{t.role}</div>
                </div>
                <div
                  className="w-2 h-2 rounded-full ml-auto flex-shrink-0"
                  style={{
                    background: t.color,
                    boxShadow: `0 0 8px ${t.color}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
