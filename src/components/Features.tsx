import {
  BellIcon,
  ChatIcon,
  HeartIcon,
  MemoryIcon,
  MicIcon,
  MusicIcon,
  UserIcon,
} from './ThemeIcons';

const features = [
  {
    icon: <MemoryIcon size={18} color="#fbbf24" />,
    title: 'Per-User Memory',
    desc: 'Remembers up to 20 messages per person. Kichi knows your name, message count, and first-seen date - she actually remembers you exist.',
    color: '#fbbf24',
    bg: 'rgba(245,158,11,.1)',
    border: 'rgba(245,158,11,.25)',
    badge: 'Smart',
  },
  {
    icon: <BellIcon size={18} color="#fb923c" />,
    title: 'Smart Reminders',
    desc: '3 built-in reminders (Pagi 07:00, Siang 12:00, Malam 21:00) plus custom ones per guild. Say what you need, she builds it with AI intent parsing.',
    color: '#fb923c',
    bg: 'rgba(249,115,22,.1)',
    border: 'rgba(249,115,22,.25)',
    badge: 'Automated',
  },
  {
    icon: <MicIcon size={18} color="#c084fc" />,
    title: 'Voice & TTS',
    desc: 'Join voice channels and use /speak for offline Piper TTS. Auto-leave when VC is empty. Free mode hands control off when the caller leaves.',
    color: '#c084fc',
    bg: 'rgba(168,85,247,.1)',
    border: 'rgba(168,85,247,.25)',
    badge: 'Offline TTS',
  },
  {
    icon: <MusicIcon size={18} color="#f472b6" />,
    title: 'Lyrics Finder',
    desc: 'Search any song via /lyrics. Genius API for metadata, lyrics.ovh plus LRCLIB fallback. In-memory cache (6 hrs) makes repeat requests instant.',
    color: '#f472b6',
    bg: 'rgba(236,72,153,.1)',
    border: 'rgba(236,72,153,.25)',
    badge: 'Instant',
  },
  {
    icon: <ChatIcon size={18} color="#818cf8" />,
    title: 'AI Chat',
    desc: 'Tag Kichi or reply to her messages, no slash command required. Anti-spam cooldown (5 sec) and natural typing delay keep things feeling human.',
    color: '#818cf8',
    bg: 'rgba(88,101,242,.1)',
    border: 'rgba(88,101,242,.25)',
    badge: 'Natural',
  },
  {
    icon: <UserIcon size={18} color="#2dd4bf" />,
    title: 'Personalization',
    desc: 'Speak naturally in /ask-ai - "bikinin reminder jam 9 malam" and she understands. Per-guild channels, interactive edit UI, fully customizable.',
    color: '#2dd4bf',
    bg: 'rgba(20,184,166,.1)',
    border: 'rgba(20,184,166,.25)',
    badge: 'Per-Guild',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 z-[1]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,.04), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="pill inline-flex items-center gap-2">
            <HeartIcon size={14} color="currentColor" />
            Key Features
            <HeartIcon size={14} color="currentColor" />
          </span>
          <h2
            className="font-bold leading-tight mt-3 mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Everything Your Server
            <br />
            <span className="gold-text">Actually Needs</span>
          </h2>
          <p className="text-slate-500 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            Built for real Discord servers. Not a demo bot, not a toy. Features that work, personality that sticks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass reveal rounded-[1.25rem] p-5 sm:p-6 relative overflow-hidden transition-all duration-300 cursor-default group"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = '';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.25rem]"
                style={{ background: `radial-gradient(circle at 50% 0%, ${f.bg}, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: f.bg, border: `1px solid ${f.border}` }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color }}
                >
                  {f.badge}
                </span>
              </div>

              <h3 className="font-heading text-sm font-bold mb-2" style={{ color: f.color }}>
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
