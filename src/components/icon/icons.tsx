import type { IconName } from "./types";

type IconDef = {
  viewBox: string;
  paths: React.ReactNode; // svg 내부 경로들
};

export const ICONS: Record<IconName, IconDef> = {
  search: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  link: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path
          d="M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 0 1-7-7L7 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  save: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path d="M6 21h12a2 2 0 0 0 2-2V7l-3-3H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 21v-7h8v7" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  kda: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path d="M5 19 12 5l7 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  champion: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 10h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  opggsquare: {
    viewBox: "0 0 24 24",
    paths: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 15V9h6v6H9Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
};