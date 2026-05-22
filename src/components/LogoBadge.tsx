type LogoBadgeProps = {
  compact?: boolean;
  className?: string;
  label?: string;
};

const logoSrc = "/android-chrome-192x192.png";

export function LogoBadge({ compact = false, className = "", label = "Travel Kings" }: LogoBadgeProps) {
  return (
    <img
      src={logoSrc}
      alt={label}
      loading="eager"
      decoding="async"
      className={`block object-contain ${compact ? "h-10 w-10" : "h-14 w-14"} ${className}`}
      aria-label={label}
    />
  );
}
