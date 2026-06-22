import type { ReactNode } from 'react';

type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
};

const createIcon =
  (paths: ReactNode, viewBox = '0 0 24 24', filled = false) =>
  ({ size = 16, className, color = 'currentColor', strokeWidth = 1.8 }: IconProps) =>
    (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill={filled ? color : 'none'}
        stroke={filled ? 'none' : color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        {paths}
      </svg>
    );

export const AnchorIcon = createIcon(
  <>
    <path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    <path d="M12 8v10" />
    <path d="M7 13h10" />
    <path d="M6 14c0 4 2.9 7 6 7s6-3 6-7" />
  </>,
);

export const SparkIcon = createIcon(
  <>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="M19 3.5l.6 1.8 1.8.7-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.7.6-1.8Z" />
  </>,
);

export const HeartIcon = createIcon(
  <path d="M12 20s-7-4.3-7-9.6C5 7.1 6.9 5 9.3 5c1.4 0 2.4.7 2.7 1.2.3-.5 1.3-1.2 2.7-1.2C17.1 5 19 7.1 19 10.4 19 15.7 12 20 12 20Z" />,
  '0 0 24 24',
);

export const ShieldIcon = createIcon(
  <>
    <path d="M12 3 19 6v5c0 5-3.4 8.8-7 10-3.6-1.2-7-5-7-10V6l7-3Z" />
    <path d="M9.5 12.5 11.3 14 15 10" />
  </>,
);

export const MicIcon = createIcon(
  <>
    <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </>,
);

export const MusicIcon = createIcon(
  <>
    <path d="M10 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <path d="M15 16.5V6l6-1.5v10.5" />
    <path d="M15 8.5 21 7" />
  </>,
);

export const ChatIcon = createIcon(
  <>
    <path d="M7 17H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H11l-4 3v-3Z" />
    <path d="M8 8h8M8 11h5" />
  </>,
);

export const UserIcon = createIcon(
  <>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
  </>,
);

export const BoltIcon = createIcon(
  <path d="m13 2-7 10h5l-1 10 7-10h-5l1-10Z" />,
);

export const HashIcon = createIcon(
  <>
    <path d="M10 3 8 21" />
    <path d="M16 3 14 21" />
    <path d="M4 9h16" />
    <path d="M3 15h16" />
  </>,
);

export const BellIcon = createIcon(
  <>
    <path d="M15 17H9a4 4 0 0 1-4-4v-2a7 7 0 1 1 14 0v2a4 4 0 0 1-4 4Z" />
    <path d="M10 17a2 2 0 0 0 4 0" />
  </>,
);

export const MemoryIcon = createIcon(
  <>
    <rect x="7" y="6" width="10" height="12" rx="2" />
    <path d="M9 6V4M12 6V4M15 6V4M9 18v2M12 18v2M15 18v2M7 9H5M7 12H5M7 15H5M19 9h-2M19 12h-2M19 15h-2" />
  </>,
);

export const DatabaseIcon = createIcon(
  <>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </>,
);

export const CompassIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.8 9.2 10.8 10.8 9.2 14.8l4-1.6 1.6-4Z" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <path d="M5 12h14m-6-6 6 6-6 6" />,
);

export const ChevronDownIcon = createIcon(
  <path d="m6 9 6 6 6-6" />,
);

export const CheckIcon = createIcon(
  <path d="m5 13 4 4L19 7" />,
);
