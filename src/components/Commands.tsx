import { useState } from 'react';
import {
  ArrowRightIcon,
  BoltIcon,
  HashIcon,
  MicIcon,
  ShieldIcon,
} from './ThemeIcons';
import { DiscordSVG } from './DiscordIcon';

interface Command {
  name: string;
  cat: 'general' | 'admin' | 'voice';
  desc: string;
  ex?: string;
}

const commands: Command[] = [
  { name: '/ask-ai', cat: 'general', desc: 'Chat with Kichi and she will answer your questions.', ex: 'yo wassup kichi' },
  { name: '/lyrics', cat: 'general', desc: 'Search song lyrics by title and artist. Auto-splits long results into multiple embeds.', ex: '/lyrics judul:Yellow artis:Coldplay' },
  { name: '/join', cat: 'voice', desc: 'Invite Kichi to your current voice channel. She brings TTS with her.' },
  { name: '/leave', cat: 'voice', desc: 'Kick Kichi out of voice. Caller or admin/mod only - she respects the hierarchy.' },
  { name: '/speak', cat: 'voice', desc: 'Make Kichi say something in VC via Piper TTS. Offline, no API key needed.', ex: '/speak text:Halo guys!' },
  { name: '/reminder list', cat: 'admin', desc: 'View all scheduled reminders and their status for this server.' },
  { name: '/reminder create', cat: 'admin', desc: 'Create a new custom reminder with time and message pool.' },
  { name: '/reminder edit', cat: 'admin', desc: 'Edit existing reminders: toggle on/off, change time, update messages.' },
  { name: '/reminder channel', cat: 'admin', desc: 'Add, remove, or list channels where reminders are broadcast.' },
];

const catStyle = {
  general: {
    icon: <HashIcon size={14} />,
    label: 'General',
    color: '#818cf8',
    bg: 'rgba(88,101,242,.12)',
    border: 'rgba(88,101,242,.28)',
    badgeBg: 'rgba(88,101,242,.15)',
    badgeColor: '#818cf8',
  },
  admin: {
    icon: <ShieldIcon size={14} />,
    label: 'Admin/Mod',
    color: '#fbbf24',
    bg: 'rgba(245,158,11,.1)',
    border: 'rgba(245,158,11,.28)',
    badgeBg: 'rgba(245,158,11,.12)',
    badgeColor: '#fbbf24',
  },
  voice: {
    icon: <MicIcon size={14} />,
    label: 'Voice',
    color: '#c084fc',
    bg: 'rgba(168,85,247,.12)',
    border: 'rgba(168,85,247,.28)',
    badgeBg: 'rgba(168,85,247,.15)',
    badgeColor: '#c084fc',
  },
} as const;

type FilterType = 'all' | keyof typeof catStyle;

const filterTabs: { id: FilterType; label: string; icon: JSX.Element }[] = [
  { id: 'all', label: 'All', icon: <BoltIcon size={13} /> },
  { id: 'general', label: 'General', icon: <HashIcon size={13} /> },
  { id: 'admin', label: 'Admin / Mod', icon: <ShieldIcon size={13} /> },
  { id: 'voice', label: 'Voice', icon: <MicIcon size={13} /> },
];

export default function Commands() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = activeFilter === 'all'
    ? commands
    : commands.filter((c) => c.cat === activeFilter);

  return (
    <section id="commands" className="relative py-24 z-[1]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(88,101,242,.04), transparent)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="pill pill-blue inline-flex items-center gap-2">
            <BoltIcon size={14} color="currentColor" />
            Commands
          </span>
          <h2
            className="font-bold leading-tight mt-3 mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Slash Commands
            <br />
            <span className="discord-text">That Actually Work</span>
          </h2>
          <p className="text-slate-500 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            Clean, organized commands for everyone, with admin-only protection where it matters.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className="px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 inline-flex items-center gap-2"
              style={{
                background: activeFilter === tab.id ? 'rgba(88,101,242,.15)' : 'transparent',
                color: activeFilter === tab.id ? '#818cf8' : '#64748b',
                border: activeFilter === tab.id
                  ? '1px solid rgba(88,101,242,.35)'
                  : '1px solid transparent',
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((cmd) => {
            const s = catStyle[cmd.cat];
            return (
              <div
                key={cmd.name}
                className="glass rounded-[0.875rem] p-4 flex gap-3.5 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(88,101,242,.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                >
                  {s.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-1.5 mb-0.5">
                    <span className="font-mono text-[0.82rem] font-semibold text-indigo-400">
                      {cmd.name}
                    </span>
                    <span
                      className="text-[0.6rem] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: s.badgeBg,
                        color: s.badgeColor,
                        border: `1px solid ${s.border}`,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[0.78rem] leading-relaxed mt-0.5">
                    {cmd.desc}
                  </p>
                  {cmd.ex && (
                    <div
                      className="font-mono text-[0.7rem] text-slate-600 rounded-md px-2 py-1 mt-1.5 flex items-center gap-1.5"
                      style={{
                        background: 'rgba(255,255,255,.03)',
                        border: '1px solid rgba(255,255,255,.06)',
                      }}
                    >
                      <ArrowRightIcon size={12} color="#334155" strokeWidth={2.2} />
                      {cmd.ex}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-blue rounded-[1.25rem] px-4 sm:px-6 py-4 flex items-start sm:items-center gap-3 sm:gap-4 max-w-[560px] mx-auto mt-8">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
            style={{
              background: 'rgba(88,101,242,.15)',
              border: '1px solid rgba(88,101,242,.3)',
            }}
          >
            <DiscordSVG width={18} height={14} fill="#818cf8" />
          </div>
          <div className="min-w-0">
            <p className="text-slate-200 text-sm font-semibold">All commands are slash commands</p>
            <p className="text-slate-600 text-[0.78rem] mt-0.5">
              Type <code className="text-indigo-400 font-mono">/</code> in any Discord channel after adding Kichi to see her full command list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
