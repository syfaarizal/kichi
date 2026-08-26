import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  CompassIcon,
  HashIcon,
  ChatIcon,
  BoltIcon,
  SparkIcon,
} from '../components/ThemeIcons';

const GOLD   = '#f59e0b';
const INDIGO = '#818cf8';

// ── Inline icons not available in ThemeIcons ──────────────────────────────────

const ClipboardIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const RefreshIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

interface Issue {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  tip: string;
}

const commonIssues: Issue[] = [
  {
    tag: 'lyrics',
    tagColor: INDIGO,
    title: "/lyrics can't find the right song",
    description:
      'The search hits three providers in order: Genius → lyrics.ovh → LRCLIB. A miss on one triggers the next automatically.',
    tip: 'Always pass both judul and artis. "Yellow" alone is ambiguous — "Yellow Coldplay" is not.',
  },
  {
    tag: 'voice / tts',
    tagColor: GOLD,
    title: '/speak has no output or fails silently',
    description:
      "Piper TTS is an offline engine and must be installed on the host server separately. The bot won't warn you if it's missing.",
    tip: 'Verify PIPER_BIN and PIPER_MODEL are correctly set in your .env. The bot also needs to be in the voice channel first (use /join).',
  },
  {
    tag: 'reminder',
    tagColor: INDIGO,
    title: 'Reminders fire to the wrong channel or not at all',
    description:
      'Reminders broadcast to channels registered via /reminder channel add. If no channels are registered, nothing is sent.',
    tip: 'Run /reminder channel list to see registered channels. Check that Kichi has Send Messages permission in each one.',
  },
  {
    tag: 'ai / cooldown',
    tagColor: GOLD,
    title: 'Kichi stops responding to AI messages',
    description:
      "There's a 5-second per-user cooldown between AI requests. Rapid-fire messages are silently dropped, not queued.",
    tip: 'Wait at least 5 seconds between /ask-ai calls. If the issue persists, verify your AI_KEY (OpenRouter) is valid and has remaining credits.',
  },
  {
    tag: 'voice',
    tagColor: INDIGO,
    title: '/leave gives a "not authorized" error',
    description:
      'By design, only the user who used /join (the "caller") or a member with Admin/Mod permissions can eject Kichi from a voice channel.',
    tip: 'If the original caller left the server, anyone can run /join to become the new caller and then use /leave.',
  },
  {
    tag: 'deployment',
    tagColor: GOLD,
    title: "Bot goes offline and doesn't restart",
    description:
      'If running via PM2, a crash without auto-restart usually means a fatal startup error — often a missing env variable.',
    tip: 'Run pm2 logs pirate-bot to see the last error. Double-check all required variables in .env against .env.example.',
  },
  {
    tag: 'permissions',
    tagColor: INDIGO,
    title: "/reminder create/edit/delete aren't showing up",
    description:
      'These commands are intentionally gated. Discord only shows them to users with the Administrator or Manage Messages permission.',
    tip: 'This is expected behaviour, not a bug. Contact your server admin to get the right role.',
  },
  {
    tag: 'ai',
    tagColor: GOLD,
    title: 'Kichi "forgot" something from earlier in the chat',
    description:
      "Memory is capped at 20 messages per user and is in-session only. Once the bot restarts or you run /forget, it's gone.",
    tip: "This is by design. If you need persistent memory across restarts, that's a feature request — open one on GitHub.",
  },
];

interface ReportStep {
  icon: ReactNode;
  label: string;
  detail: string;
}

const reportSteps: ReportStep[] = [
  {
    icon: <HashIcon size={16} />,
    label: 'Exact command',
    detail: 'Which slash command or @mention triggered it? Include the full input.',
  },
  {
    icon: <ClipboardIcon size={16} />,
    label: 'Expected vs actual',
    detail: 'What did you expect to happen? What happened instead?',
  },
  {
    icon: <ChatIcon size={16} />,
    label: 'Error message',
    detail: 'Any error embed, red text, or console output? Paste it verbatim.',
  },
  {
    icon: <RefreshIcon size={16} />,
    label: 'Reproducibility',
    detail: 'Does it happen every time? Only sometimes? After a specific action?',
  },
  {
    icon: <CompassIcon size={16} />,
    label: 'Environment',
    detail: 'Bot version / Node.js version / hosting platform (PM2, Railway, etc.).',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ReportIssue() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <div className="min-h-[80vh] pt-28 pb-24">
      <div className="max-w-[780px] mx-auto px-6">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 text-sm transition-colors duration-200 mb-12 no-underline group"
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '')}
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
            Support
          </span>
          <h1 className="font-display text-4xl sm:text-[2.8rem] font-bold text-white mt-3 mb-5 leading-tight">
            Report an Issue
          </h1>
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.78rem] text-slate-500 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}
          >
            <span>For bugs, unexpected behavior, or feature requests</span>
            <span className="text-slate-700">·</span>
            <span>Kichi (Pirate Helper)</span>
          </div>
        </div>

        {/* Intro */}
        <div
          className="rounded-xl px-6 py-5 mb-10 flex items-start gap-4"
          style={{
            background: 'rgba(245,158,11,.06)',
            border: '1px solid rgba(245,158,11,.18)',
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: 'rgba(245,158,11,.12)', border: '1px solid rgba(245,158,11,.2)' }}
          >
            <CompassIcon size={16} color={GOLD} />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Found a bug? Kichi appreciates the report more than she'd ever admit out loud.
            Check the common issues below first — your answer might already be there. If not,
            open an issue on GitHub or ping us on Discord.
          </p>
        </div>

        {/* ── Report channels ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {/* GitHub */}
          <a
            href="https://github.com/syfaarizal/pirate-discord-bot/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-6 no-underline flex flex-col gap-4 transition-all duration-200"
            style={{
              background: 'rgba(9,13,26,.6)',
              border: '1px solid rgba(245,158,11,.14)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,.35)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,158,11,.04)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,158,11,.14)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(9,13,26,.6)';
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(245,158,11,.1)' }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ color: GOLD }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium mb-1">Open a GitHub Issue</div>
              <div className="text-slate-500 text-sm leading-relaxed">
                For bugs, reproducible errors, and feature requests. Searchable — check if yours already exists before posting.
              </div>
            </div>
            <div className="text-xs font-medium mt-auto" style={{ color: GOLD }}>
              github.com/syfaarizal/pirate-discord-bot ↗
            </div>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/84NbEnYNdN"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-6 no-underline flex flex-col gap-4 transition-all duration-200"
            style={{
              background: 'rgba(9,13,26,.6)',
              border: '1px solid rgba(129,140,248,.14)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(88,101,242,.35)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(88,101,242,.04)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(129,140,248,.14)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(9,13,26,.6)';
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(129,140,248,.1)' }}
            >
              <svg width="18" height="14" viewBox="0 0 71 55" fill={INDIGO} aria-hidden="true">
                <path d="M60.1 4.9A58.5 58.5 0 0 0 45.6.4a40 40 0 0 0-1.8 3.7 54.2 54.2 0 0 0-16.3 0A38.7 38.7 0 0 0 25.7.4 58.4 58.4 0 0 0 11.1 5C1.6 19.3-.9 33.2.3 46.9a58.9 58.9 0 0 0 18 9.1 43.2 43.2 0 0 0 3.7-6 38.3 38.3 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 36 0l1.4 1.1a38 38 0 0 1-5.8 2.8 43 43 0 0 0 3.7 6 58.6 58.6 0 0 0 18-9A55.5 55.5 0 0 0 60.1 4.9ZM23.7 38.4c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.3 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.3 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium mb-1">Join the Discord Server</div>
              <div className="text-slate-500 text-sm leading-relaxed">
                For quicker back-and-forth. Good for questions, clarifications, or if you're not sure if something is a bug.
              </div>
            </div>
            <div className="text-xs font-medium mt-auto" style={{ color: INDIGO }}>
              discord.gg/84NbEnYNdN ↗
            </div>
          </a>
        </div>

        {/* ── What to include ── */}
        <div
          className="rounded-xl overflow-hidden mb-10"
          style={{ background: 'rgba(9,13,26,.5)', border: '1px solid rgba(255,255,255,.05)' }}
        >
          <div
            className="px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,.04)' }}
          >
            <h2 className="font-heading text-[0.95rem] font-bold" style={{ color: GOLD }}>
              What to Include in Your Report
            </h2>
          </div>
          <div className="px-6 py-5">
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              A good bug report gets fixed fast. A vague one gets "can you reproduce?" replies for a week.
              Include as much of the following as you can:
            </p>
            <div className="flex flex-col gap-3">
              {reportSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-slate-400"
                    style={{ background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.12)' }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm font-medium mb-0.5">{step.label}</div>
                    <div className="text-slate-500 text-[0.82rem] leading-relaxed">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Common issues accordion ── */}
        <div
          className="rounded-xl overflow-hidden mb-10"
          style={{ background: 'rgba(9,13,26,.5)', border: '1px solid rgba(255,255,255,.05)' }}
        >
          <div
            className="px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,.04)' }}
          >
            <h2 className="font-heading text-[0.95rem] font-bold" style={{ color: INDIGO }}>
              Common Issues &amp; Fixes
            </h2>
          </div>

          <div>
            {commonIssues.map((issue, i) => (
              <div
                key={i}
                style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,.04)' }}
              >
                {/* Accordion trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-4 flex items-start gap-4 cursor-pointer bg-transparent border-none transition-colors duration-150"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,.015)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }}
                >
                  <span
                    className="text-[0.68rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 mt-0.5"
                    style={{
                      color: issue.tagColor,
                      background: `${issue.tagColor}15`,
                      border: `1px solid ${issue.tagColor}25`,
                    }}
                  >
                    {issue.tag}
                  </span>
                  <span className="text-slate-300 text-sm font-medium flex-1 leading-snug">
                    {issue.title}
                  </span>
                  <svg
                    width="14" height="14" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}
                    className="shrink-0 mt-0.5 transition-transform duration-200"
                    style={{
                      color: '#475569',
                      transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Accordion content */}
                {openIdx === i && (
                  <div
                    className="px-6 pb-5 flex flex-col gap-3"
                    style={{ paddingLeft: 'calc(1.5rem + 2.25rem + 1rem)' }}
                  >
                    <p className="text-slate-400 text-sm leading-relaxed">{issue.description}</p>
                    <div
                      className="rounded-lg px-4 py-3 flex items-start gap-3"
                      style={{
                        background: `${issue.tagColor}08`,
                        border: `1px solid ${issue.tagColor}18`,
                      }}
                    >
                      <span className="shrink-0 mt-0.5" style={{ color: issue.tagColor, opacity: 0.7 }}>
                        <BoltIcon size={14} color={issue.tagColor} />
                      </span>
                      <p className="text-slate-400 text-[0.82rem] leading-relaxed">{issue.tip}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Feature requests ── */}
        <div
          className="rounded-xl px-6 py-5 mb-4"
          style={{
            background: 'rgba(129,140,248,.06)',
            border: '1px solid rgba(129,140,248,.15)',
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: 'rgba(129,140,248,.1)', border: '1px solid rgba(129,140,248,.18)' }}
            >
              <SparkIcon size={16} color={INDIGO} />
            </div>
            <div>
              <div className="text-white text-sm font-medium mb-1.5">Have a feature request?</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                New commands, quality-of-life improvements, new lyric providers — all welcome.
                Open an issue on GitHub tagged{' '}
                <span className="text-slate-300 font-mono text-[0.78rem]">enhancement</span>{' '}
                and describe what you'd want and why.
              </p>
              <a
                href="https://github.com/syfaarizal/pirate-discord-bot/issues/new?labels=enhancement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors"
                style={{ color: INDIGO }}
              >
                Submit a feature request ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-14 pt-8 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
        >
          <p className="text-slate-600 text-[0.78rem]">
            Built with ♥︎ by <span className="text-slate-500">Kai Shi</span> · Kichi (Pirate Helper)
          </p>
          <div className="flex items-center gap-5 text-[0.78rem]">
            <Link to="/terms" className="text-slate-600 hover:text-amber-400 transition-colors no-underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-slate-600 hover:text-indigo-400 transition-colors no-underline">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}