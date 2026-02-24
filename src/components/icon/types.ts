export const ICON_NAMES = [
  "search",
  "link",
  "save",
  "kda",
  "champion",
  "opggsquare",
] as const;

export type IconName = (typeof ICON_NAMES)[number];