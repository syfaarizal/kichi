import { DiscordSVG } from './DiscordIcon';
import {
  AnchorIcon,
  ArrowRightIcon,
  BoltIcon,
  SparkIcon,
} from './ThemeIcons';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-start lg:items-center pt-20 sm:pt-24 pb-12 overflow-hidden z-[1]"
    >
      <div
        className="absolute top-[8%] left-[6%] sm:left-[10%] w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,.07), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[8%] right-[4%] sm:right-[10%] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(88,101,242,.08), transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6">
              <span className="pill inline-flex items-center gap-2">
                <AnchorIcon size={14} color="currentColor" />
                Discord Bot
              </span>
              <span className="pill pill-blue inline-flex items-center gap-2">
                <SparkIcon size={14} color="currentColor" />
                AI-Powered
              </span>
            </div>

            <h1 className="mb-2">
              <span
                className="gold-text font-display font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
              >
                Kichi
              </span>
              <div
                className="text-slate-300 font-bold mt-1"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontFamily: 'Cinzel, serif' }}
              >
                Your Server's New <span style={{ color: '#818cf8' }}>Sarcastic</span> Bestie
              </div>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-[500px] mx-auto lg:mx-0">
              A sarcastic, Gen Z AI companion with{' '}
              <span className="text-amber-300">per-user memory</span>, auto reminders, voice
              capabilities, and a personality that actually slaps.{' '}
              <span style={{ color: '#818cf8' }}>Not an assistant. Not a bot. A friend.</span>
            </p>

            <div className="glass flex items-center gap-3 p-3 rounded-2xl mb-7 w-fit">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <img src="/img/kichi-logo.png" alt="Kichi Logo" className="w-full h-full object-contain block" />
              </div>
              <div>
                <div className="text-[0.7rem] text-slate-600 mb-0.5 text-left">In #general</div>
                <div className="text-sm text-slate-200">
                  <span className="text-amber-400 font-semibold">Kichi</span>: oke, gua di sini
                </div>
              </div>
              <div className="wave-bars ml-2">
                {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((delay, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{ animationDelay: `${delay}s`, height: `${[8, 14, 10, 18, 8, 12, 9][i]}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start flex-wrap gap-4 mb-10">
              <a
                href="https://discord.com/oauth2/authorize?client_id=1480203870331343090&permissions=37100864&integration_type=0&scope=bot+applications.commands"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #5865F2, #7289da)',
                  border: '1px solid rgba(88,101,242,.5)',
                  boxShadow: '0 4px 18px rgba(88,101,242,.35)',
                }}
              >
                <DiscordSVG width={18} height={14} />
                Invite Kichi to Your Server
              </a>
              <button
                onClick={() => scrollTo('#features')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'transparent',
                  color: '#fcd34d',
                  border: '1px solid rgba(245,158,11,.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(245,158,11,.08)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(245,158,11,.4)';
                }}
              >
                View Features
                <ArrowRightIcon size={14} color="currentColor" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              {[
                { value: '3+', label: 'Built-in Reminders' },
                { value: '13', label: 'Slash Commands' },
                { value: '100%', label: 'Free to Use' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono font-bold text-xl text-amber-400">{stat.value}</div>
                  <div className="text-[0.7rem] text-slate-600 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last h-[320px] sm:h-[420px] lg:h-[520px] w-full max-w-[420px] lg:max-w-none mx-auto flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full"
                style={{
                  border: '1px solid rgba(245,158,11,.1)',
                  animation: 'floatSlow 12s ease-in-out infinite',
                }}
              />
              <div
                className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] rounded-full"
                style={{ border: '1px solid rgba(245,158,11,.15)' }}
              />
              <div
                className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full"
                style={{
                  border: '1px solid rgba(245,158,11,.2)',
                  animation: 'spinSlow 20s linear infinite',
                }}
              />
            </div>

            <div className="relative z-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div className="glass absolute top-2.5 left-1 sm:-left-14 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="online-dot" />
                <span className="text-sm text-green-300 font-medium">Online</span>
              </div>

              <div
                className="w-[320px] h-[320px] rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(245,158,11,.5)',
                  boxShadow: '0 0 40px rgba(245,158,11,.25), 0 0 80px rgba(245,158,11,.1)',
                  background: 'linear-gradient(135deg, #1a1200, #0d1425, #0a0818)',
                }}
              >
                <img
                  src="/img/kichi-logo.png"
                  alt="Kichi Avatar"
                  className="w-full h-full object-contain pt-[10px] block"
                />
              </div>

              <div className="glass absolute -bottom-2 right-1 sm:-right-3 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <SparkIcon size={12} color="#fcd34d" />
                <span className="text-xs font-bold text-amber-300 font-mono">Gen Z AI</span>
              </div>
            </div>

            <div
              className="hidden sm:flex glass absolute w-[42px] h-[42px] rounded-xl items-center justify-center text-base top-5 right-5"
              style={{ animation: 'floatSlow 8s ease-in-out infinite 1s', color: '#fcd34d' }}
            >
              <BoltIcon size={18} color="#fcd34d" />
            </div>
            <div
              className="hidden sm:flex glass-blue absolute w-[42px] h-[42px] rounded-xl items-center justify-center bottom-12 left-5"
              style={{ animation: 'float 7s ease-in-out infinite 2s' }}
            >
              <DiscordSVG width={18} height={14} fill="#818cf8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
