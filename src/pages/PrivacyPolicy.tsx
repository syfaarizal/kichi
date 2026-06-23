import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon, ChatIcon } from '../components/ThemeIcons';

const INDIGO = '#818cf8';

// ── Inline icons not available in ThemeIcons ──────────────────────────────────

const TrashIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </svg>
);

const LogOutIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PencilIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
  </svg>
);

const XCircleIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6M9 9l6 6" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

interface DataRow {
  field: string;
  description: string;
  scope: string;
}

const dataTable: DataRow[] = [
  { field: 'Display name',     description: 'Your Discord username visible in the server',        scope: 'Per user'  },
  { field: 'Message count',    description: 'Total messages sent to Kichi (session)',              scope: 'Per user'  },
  { field: 'First seen date',  description: 'Timestamp of your first interaction with Kichi',     scope: 'Per user'  },
  { field: 'Chat history',     description: 'Up to 20 most recent messages for AI context',       scope: 'Per user'  },
  { field: 'Guild ID',         description: 'Server identifier for reminder configuration',        scope: 'Per guild' },
  { field: 'Channel IDs',      description: 'Channels registered to receive scheduled reminders', scope: 'Per guild' },
  { field: 'Reminder configs', description: 'Schedule, messages, and toggle state per reminder',   scope: 'Per guild' },
];

interface ThirdParty {
  name: string;
  purpose: string;
  dataShared: string;
  privacy: string;
}

const thirdParties: ThirdParty[] = [
  {
    name: 'Discord (discord.js)',
    purpose: 'Core platform — the environment Kichi runs in',
    dataShared: "All interactions occur within Discord's own infrastructure",
    privacy: 'https://discord.com/privacy',
  },
  {
    name: 'OpenRouter AI',
    purpose: "Powers Kichi's AI chat responses",
    dataShared: 'Your messages sent via /ask-ai or @mention are forwarded to generate replies',
    privacy: 'https://openrouter.ai/privacy',
  },
  {
    name: 'Genius API',
    purpose: 'Song metadata (title, artist, thumbnail) for /lyrics',
    dataShared: 'Your search query (song title + artist name)',
    privacy: 'https://genius.com/privacy-policy',
  },
  {
    name: 'lyrics.ovh / LRCLIB',
    purpose: 'Lyric content retrieval (primary + fallback)',
    dataShared: 'Your search query (song title + artist name)',
    privacy: '',
  },
  {
    name: 'Piper TTS',
    purpose: 'Offline text-to-speech for /speak',
    dataShared: 'None — fully offline, no data leaves the host server',
    privacy: '',
  },
];

interface RightItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const rights: RightItem[] = [
  {
    icon: <TrashIcon size={16} />,
    title: 'Erase your chat memory',
    description: 'Use /forget at any time. Immediate, irreversible, no questions asked.',
  },
  {
    icon: <LogOutIcon size={16} />,
    title: 'Remove Kichi from your server',
    description: 'Kicking Kichi clears all guild-level data. Server admins have full control.',
  },
  {
    icon: <MailIcon size={16} />,
    title: 'Request data information',
    description: "Contact Kai Shi via Discord or GitHub to ask what's stored for your account.",
  },
  {
    icon: <PencilIcon size={16} />,
    title: 'Correct your data',
    description: 'Your display name auto-syncs from Discord. Chat history resets each session.',
  },
];

const dontDoItems = [
  "We don't sell your data — ever.",
  "We don't use your data for advertising.",
  "We don't record voice audio. /speak is fully offline.",
  "We don't track you across different servers.",
  "We don't store conversation logs long-term.",
  "We don't share data between servers.",
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-[80vh] pt-28 pb-24">
      <div className="max-w-[780px] mx-auto px-6">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-indigo-400 transition-colors duration-200 mb-12 no-underline group"
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
            style={{ color: INDIGO }}
          >
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-[2.8rem] font-bold text-white mt-3 mb-5 leading-tight">
            Privacy Policy
          </h1>
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.78rem] text-slate-500 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}
          >
            <span>Effective: <span className="text-slate-400">June 1, 2026</span></span>
            <span className="text-slate-700">·</span>
            <span>Kichi (Pirate Helper) — built by Kai Shi</span>
          </div>
        </div>

        {/* Intro */}
        <div
          className="rounded-xl px-6 py-5 mb-10 flex items-start gap-4"
          style={{
            background: 'rgba(129,140,248,.06)',
            border: '1px solid rgba(129,140,248,.18)',
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: 'rgba(129,140,248,.12)', border: '1px solid rgba(129,140,248,.2)' }}
          >
            <ShieldIcon size={16} color={INDIGO} />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Kichi is a self-hosted Discord bot. Most of her data lives on the server running her —
            not in some faraway cloud database. Here's exactly what's collected, why, and how long it sticks around.
          </p>
        </div>

        {/* ── Section 1: What we collect ── */}
        <Section title="What We Collect" color={INDIGO}>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Kichi collects the minimum needed to function. Here's the full picture:
          </p>
          <div
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,.06)' }}
          >
            <div
              className="grid grid-cols-[160px_1fr_90px] gap-3 px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-wider"
              style={{ background: 'rgba(129,140,248,.08)', color: INDIGO }}
            >
              <span>Field</span>
              <span>Description</span>
              <span>Scope</span>
            </div>
            {dataTable.map((row, i) => (
              <div
                key={row.field}
                className="grid grid-cols-[160px_1fr_90px] gap-3 px-4 py-3 text-sm"
                style={{
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.015)',
                  borderTop: '1px solid rgba(255,255,255,.04)',
                }}
              >
                <span className="text-slate-300 font-medium text-[0.82rem]">{row.field}</span>
                <span className="text-slate-500 text-[0.82rem] leading-snug">{row.description}</span>
                <span
                  className="text-[0.72rem] font-mono"
                  style={{ color: row.scope === 'Per user' ? INDIGO : '#f59e0b', opacity: 0.7 }}
                >
                  {row.scope}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Section 2: How we use it ── */}
        <Section title="How We Use Your Data" color={INDIGO}>
          <ul className="flex flex-col gap-3">
            {[
              { bold: 'Chat history', rest: " gives Kichi conversational context so she doesn't forget what you were just talking about. It's wiped on /forget or bot restart." },
              { bold: 'User profiles', rest: " (name, message count, first seen) let Kichi personalize her responses. She remembers your name, not your deepest secrets." },
              { bold: 'Reminder configs', rest: ' are stored so scheduled messages fire at the right time to the right channels. No configs = no reminders.' },
              { bold: 'Lyrics cache', rest: ' stores results in memory for 6 hours to avoid redundant API calls. Clears on restart.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-[5px] h-[5px] rounded-full shrink-0 mt-[7px]"
                  style={{ background: INDIGO, opacity: 0.35 }}
                />
                <span className="text-slate-400 text-sm leading-relaxed">
                  <span className="text-slate-300 font-medium">{item.bold}</span>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Section 3: Retention ── */}
        <Section title="Data Retention" color={INDIGO}>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Chat memory',     value: 'Session-based', detail: 'Cleared on /forget or restart'    },
              { label: 'User profiles',   value: 'In-memory',     detail: 'Not persisted to disk'             },
              { label: 'Reminder configs', value: 'Persistent',   detail: 'Until deleted via bot command'    },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-4"
                style={{ background: 'rgba(129,140,248,.05)', border: '1px solid rgba(129,140,248,.1)' }}
              >
                <div className="text-slate-500 text-[0.72rem] uppercase tracking-wider mb-2">{item.label}</div>
                <div className="text-white text-sm font-medium mb-1">{item.value}</div>
                <div className="text-slate-600 text-[0.75rem]">{item.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mt-4">
            No conversation logs, voice audio, or user-generated content is written to permanent storage. Everything is ephemeral by design.
          </p>
        </Section>

        {/* ── Section 4: Third parties ── */}
        <Section title="Third-Party Services" color={INDIGO}>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Kichi depends on a few external services to function. Here's exactly what goes where:
          </p>
          <div className="flex flex-col gap-3">
            {thirdParties.map((tp) => (
              <div
                key={tp.name}
                className="rounded-lg px-5 py-4"
                style={{
                  background: 'rgba(9,13,26,.5)',
                  border: '1px solid rgba(255,255,255,.05)',
                }}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <span className="text-slate-200 text-sm font-medium">{tp.name}</span>
                  {tp.privacy && (
                    <a
                      href={tp.privacy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.72rem] no-underline transition-colors"
                      style={{ color: INDIGO, opacity: 0.7 }}
                    >
                      Privacy Policy ↗
                    </a>
                  )}
                </div>
                <p className="text-slate-500 text-[0.8rem] leading-relaxed mb-1">{tp.purpose}</p>
                <p className="text-slate-600 text-[0.78rem] leading-relaxed">
                  <span className="text-slate-500">Data shared: </span>{tp.dataShared}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Section 5: What we don't do ── */}
        <Section title="What We Don't Do" color={INDIGO}>
          <div className="grid sm:grid-cols-2 gap-3">
            {dontDoItems.map((text, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-3 flex items-center gap-3"
                style={{
                  background: 'rgba(129,140,248,.04)',
                  border: '1px solid rgba(129,140,248,.08)',
                }}
              >
                <span className="shrink-0" style={{ color: INDIGO, opacity: 0.6 }}>
                  <XCircleIcon size={14} />
                </span>
                <span className="text-slate-400 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Section 6: Your rights ── */}
        <Section title="Your Rights" color={INDIGO}>
          <div className="flex flex-col gap-3">
            {rights.map((right) => (
              <div
                key={right.title}
                className="flex items-start gap-4 rounded-lg px-5 py-4"
                style={{
                  background: 'rgba(9,13,26,.5)',
                  border: '1px solid rgba(255,255,255,.05)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-slate-400"
                  style={{ background: 'rgba(129,140,248,.08)', border: '1px solid rgba(129,140,248,.15)' }}
                >
                  {right.icon}
                </div>
                <div>
                  <div className="text-slate-200 text-sm font-medium mb-1">{right.title}</div>
                  <div className="text-slate-500 text-[0.82rem] leading-relaxed">{right.description}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Section 7: Contact ── */}
        <Section title="Contact" color={INDIGO}>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Questions about this policy? Want to request data deletion or just say hi?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/syfaarizal/pirate-discord-bot/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium no-underline transition-all duration-200"
              style={{
                background: 'rgba(129,140,248,.08)',
                border: '1px solid rgba(129,140,248,.2)',
                color: INDIGO,
              }}
            >
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Open a GitHub Issue
            </a>
            <a
              href="https://discord.gg/pa9uyMTp7w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium no-underline transition-all duration-200"
              style={{
                background: 'rgba(88,101,242,.08)',
                border: '1px solid rgba(88,101,242,.2)',
                color: '#7289da',
              }}
            >
              <svg width="16" height="12" viewBox="0 0 71 55" fill="currentColor">
                <path d="M60.1 4.9A58.5 58.5 0 0 0 45.6.4a40 40 0 0 0-1.8 3.7 54.2 54.2 0 0 0-16.3 0A38.7 38.7 0 0 0 25.7.4 58.4 58.4 0 0 0 11.1 5C1.6 19.3-.9 33.2.3 46.9a58.9 58.9 0 0 0 18 9.1 43.2 43.2 0 0 0 3.7-6 38.3 38.3 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 36 0l1.4 1.1a38 38 0 0 1-5.8 2.8 43 43 0 0 0 3.7 6 58.6 58.6 0 0 0 18-9A55.5 55.5 0 0 0 60.1 4.9ZM23.7 38.4c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.3 6.4 7.2c0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2 6.5 3.3 6.4 7.2c0 4-2.8 7.2-6.4 7.2Z" />
              </svg>
              Join Discord Server
            </a>
          </div>
        </Section>

        {/* Footer note */}
        <div
          className="mt-14 pt-8 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
        >
          <p className="text-slate-600 text-[0.78rem]">
            Built with ♥︎ by <span className="text-slate-500">Kai Shi</span> · Discord.js · Node.js · OpenRouter AI
          </p>
          <div className="flex items-center gap-5 text-[0.78rem]">
            <Link to="/terms" className="text-slate-600 hover:text-indigo-400 transition-colors no-underline">
              Terms of Service
            </Link>
            <Link to="/report-issue" className="text-slate-600 hover:text-indigo-400 transition-colors no-underline">
              Report Issue
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Shared section wrapper ── */
function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-4"
      style={{
        background: 'rgba(9,13,26,.5)',
        border: '1px solid rgba(255,255,255,.05)',
      }}
    >
      <div
        className="px-6 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,.04)' }}
      >
        <h2
          className="font-heading text-[0.95rem] font-bold"
          style={{ color }}
        >
          {title}
        </h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}