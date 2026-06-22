import { AnchorIcon, BoltIcon, CheckIcon, HeartIcon } from './ThemeIcons';

const traits = [
  {
    icon: <BoltIcon size={18} color="#fbbf24" />,
    title: 'Sarcastic & Smart',
    desc: "Doesn't just answer. She has opinions and will let you know.",
    bg: 'rgba(245,158,11,.07)',
    border: 'rgba(245,158,11,.18)',
    color: '#fbbf24',
  },
  {
    icon: <HeartIcon size={18} color="#f472b6" />,
    title: 'Actually Remembers You',
    desc: 'Per-user memory means she knows your name, your vibe, and your history.',
    bg: 'rgba(236,72,153,.07)',
    border: 'rgba(236,72,153,.18)',
    color: '#f472b6',
  },
  {
    icon: <AnchorIcon size={18} color="#818cf8" />,
    title: 'Server-First',
    desc: "Built for your server's culture. Reminders, voice, and lyrics all feel native.",
    bg: 'rgba(88,101,242,.07)',
    border: 'rgba(88,101,242,.18)',
    color: '#818cf8',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 z-[1]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,.04), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="pill inline-flex items-center gap-2">
            <AnchorIcon size={14} color="currentColor" />
            About Kichi
          </span>
          <h2
            className="font-bold leading-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Not a Bot. <span className="gold-text">A Friend.</span>
          </h2>
        </div>

        <div className="glass reveal rounded-[2rem] px-8 py-12 text-center relative overflow-hidden max-w-[860px] mx-auto">
          <div
            className="absolute inset-0 pointer-events-none rounded-[2rem]"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,.06), transparent 70%)',
            }}
          />

          <div
            className="w-[88px] h-[88px] rounded-full mx-auto mb-6 flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,.18), rgba(88,101,242,.18))',
              border: '2px solid rgba(245,158,11,.4)',
              boxShadow: '0 0 30px rgba(245,158,11,.2)',
            }}
          >
            <img src="/img/kichi-logo.png" alt="Kichi Logo" className="pt-1" />
            <span
              className="absolute bottom-0.5 right-0.5 w-[22px] h-[22px] rounded-full bg-green-500 flex items-center justify-center"
              style={{ border: '2px solid var(--navy-900)' }}
            >
              <CheckIcon size={10} color="#ffffff" strokeWidth={2.3} />
            </span>
          </div>

          <div className="mb-4">
            <div
              className="font-display text-[1.4rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, #fcd34d, #f59e0b, #b45309)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Pirate Helper
            </div>
            <div className="text-slate-500 text-sm mt-1">
              Known as <span className="text-amber-300 font-semibold">Kichi</span> - Built by{' '}
              <span className="text-indigo-400 font-semibold">Kai Shi</span>
            </div>
          </div>

          <div className="text-slate-400 text-[1.05rem] leading-relaxed max-w-[640px] mx-auto mb-8 px-6 relative">
            <div
              className="text-left text-[4rem] leading-[0.8] font-serif"
              style={{ color: 'rgba(245,158,11,.18)' }}
            >
              "
            </div>
            Her full name is{' '}
            <span className="text-amber-300 font-semibold">Pirate Helper</span>. People call her
            Kichi. She is your server's sarcastic, Gen Z bestie -{' '}
            <span style={{ color: '#818cf8' }}>not an assistant, not a bot, a </span>
            <em className="text-white font-semibold">friend</em>.
            <div
              className="text-left text-[4rem] leading-[0.8] font-serif"
              style={{ color: 'rgba(245,158,11,.18)', transform: 'rotate(180deg)' }}
            >
              "
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {traits.map((t) => (
              <div
                key={t.title}
                className="rounded-[0.875rem] p-4 text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: t.bg, border: `1px solid ${t.border}` }}
              >
                <div className="mb-2 flex items-center justify-center">{t.icon}</div>
                <div
                  className="font-heading text-[0.8rem] font-bold mb-1.5"
                  style={{ color: t.color }}
                >
                  {t.title}
                </div>
                <div className="text-[0.75rem] text-slate-600 leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
