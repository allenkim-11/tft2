import type { IconName } from "./types";
import { ICONS } from "./icons";

type IconProps = {
  name: IconName;
  size?: number; // px
  title?: string; // a11y
  className?: string;
};

export function Icon({ name, size = 24, title, className }: IconProps) {
  const def = ICONS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox={def.viewBox}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {def.paths}
    </svg>
  );
}