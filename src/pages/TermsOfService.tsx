import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Section {
  title: string;
  accent: string;
  items: (string | { bold: string; rest: string })[];
}

const GOLD = '#f59e0b';

const sections: Section[] = [
  {
    title: 'Acceptance of Terms',
    accent: GOLD,
    items: [
      'By inviting Kichi (Pirate Helper) to your Discord server or interacting with her in any capacity, you agree to be bound by these Terms of Service.',
      'If you don\'t agree — kick her out. No hard feelings. She\'ll survive.',
      'These terms apply to all users who interact with Kichi across any server she is a member of.',
    ],
  },
  {
    title: 'What Kichi Does',
    accent: GOLD,
    items: [
      { bold: 'AI Chat:', rest: ' Per-user memory up to 20 messages. Responds when mentioned or replied to. Powered by OpenRouter AI.' },
      { bold: 'Slash Commands:', rest: ' /help, /ping, /about, /forget, /ask-ai, /lyrics, /join, /leave, /speak, /reminder (create/edit/delete/channel/list).' },
      { bold: 'Reminder System:', rest: ' 3 built-in schedules (Pagi 07:00, Siang 12:00, Malam 21:00) plus custom reminders per guild.' },
      { bold: 'Voice TTS:', rest: ' Offline text-to-speech via Piper TTS. No audio is recorded or transmitted.' },
      { bold: 'Lyrics:', rest: ' Searches via Genius API → lyrics.ovh → LRCLIB with in-memory cache (6 hours).' },
    ],
  },
  {
    title: 'Acceptable Use',
    accent: GOLD,
    items: [
      'Do not use Kichi to harass, spam, or harm other users.',
      'The 5-second anti-spam cooldown per user is there for a reason. Don\'t try to bypass it — it won\'t work and Kichi will silently judge you.',
      'Admin-only commands (/reminder create, edit, delete, channel) are intended exclusively for server administrators and moderators with appropriate permissions.',
      'Do not attempt to jailbreak, manipulate, or alter Kichi\'s AI personality through prompt injection or social engineering.',
      'Kichi must not be used to generate illegal, harmful, or explicitly malicious content.',
    ],
  },
  {
    title: 'Data & Memory',
    accent: GOLD,
    items: [
      'Chat memory (up to 20 messages per user) is stored in-session. It resets when you use /forget or when the bot restarts. Nothing is written to a permanent database.',
      'User profiles store your display name, total message count, and first interaction date — used solely to personalize Kichi\'s responses.',
      'Reminder configurations are persisted per guild in a local reminders.json file and remain until deleted via /reminder delete or by removing the bot.',
      'No data is sold, shared, or transmitted to any third party beyond what is required for core functionality (OpenRouter for AI, Genius/lyrics.ovh/LRCLIB for lyrics).',
    ],
  },
  {
    title: 'Voice Features',
    accent: GOLD,
    items: [
      '/speak uses Piper TTS — a fully offline engine. No audio is transmitted to any external server.',
      'Voice sessions are ephemeral. When Kichi leaves a voice channel (manually via /leave or via auto-leave after 30–60 seconds of inactivity), no session data is retained.',
      'Only the caller who used /join (or an Admin/Mod) can kick Kichi from a voice channel via /leave.',
    ],
  },
  {
    title: 'Disclaimer',
    accent: GOLD,
    items: [
      'Kichi is provided "as-is" with no warranty, guarantee of uptime, or promise of continued availability.',
      'AI-generated responses may be inaccurate, incomplete, or contextually inappropriate. Do not treat them as professional, medical, legal, or financial advice.',
      'Kai Shi and contributors to the Pirate Helper project are not liable for any damages, losses, or consequences resulting from the use or misuse of Kichi.',
    ],
  },
  {
    title: 'Changes to These Terms',
    accent: GOLD,
    items: [
      'These terms may be updated at any time. Continued use of Kichi after changes are posted constitutes acceptance of the updated terms.',
      'For questions or concerns, reach out via the Discord server or open an issue on GitHub.',
    ],
  },
];

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-[80vh] pt-28 pb-24">
      <div className="max-w-[780px] mx-auto px-6">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-amber-400 transition-colors duration-200 mb-12 no-underline group"
        >
          <svg
            width="15" height="15" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="text-[0.7rem] font-bold uppercase tracking-widest font-heading"
            style={{ color: GOLD }}
          >
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-[2.8rem] font-bold text-white mt-3 mb-5 leading-tight">
            Terms of Service
          </h1>
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.78rem] text-slate-500 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}
          >
            <span>Effective: <span className="text-slate-400">June 1, 2026</span></span>
            <span className="text-slate-700">·</span>
            <span>Applies to all users of Kichi (Pirate Helper)</span>
          </div>
        </div>

        {/* Intro banner */}
        <div
          className="rounded-xl px-6 py-5 mb-10 flex items-start gap-4"
          style={{
            background: 'rgba(245,158,11,.06)',
            border: '1px solid rgba(245,158,11,.18)',
          }}
        >
          <span className="text-lg mt-0.5">⚓</span>
          <p className="text-slate-400 text-sm leading-relaxed">
            Kichi is your server's sarcastic, Gen Z AI bestie — not a corporate chatbot.
            These terms are short, plain, and written for actual humans. Please give them a quick read.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(9,13,26,.5)',
                border: '1px solid rgba(255,255,255,.05)',
              }}
            >
              {/* Section header */}
              <div
                className="flex items-center gap-4 px-6 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,.04)' }}
              >
                <span
                  className="font-mono text-[0.7rem] font-bold tabular-nums shrink-0"
                  style={{ color: GOLD, opacity: 0.6 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="font-heading text-[0.95rem] font-bold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Section content */}
              <ul className="px-6 py-5 flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-[5px] h-[5px] rounded-full shrink-0 mt-[7px]"
                      style={{ background: GOLD, opacity: 0.35 }}
                    />
                    <span className="text-slate-400 text-sm leading-relaxed">
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <span className="text-slate-300 font-medium">{item.bold}</span>
                          {item.rest}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div
          className="mt-14 pt-8 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
        >
          <p className="text-slate-600 text-[0.78rem]">
            Built with ♥︎ by <span className="text-slate-500">Kai Shi</span> · Kichi (Pirate Helper)
          </p>
          <div className="flex items-center gap-5 text-[0.78rem]">
            <a
              href="https://discord.gg/pa9uyMTp7w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-amber-400 transition-colors no-underline"
            >
              Discord
            </a>
            <a
              href="https://github.com/syfaarizal/pirate-discord-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-amber-400 transition-colors no-underline"
            >
              GitHub
            </a>
            <Link
              to="/privacy"
              className="text-slate-600 hover:text-amber-400 transition-colors no-underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}