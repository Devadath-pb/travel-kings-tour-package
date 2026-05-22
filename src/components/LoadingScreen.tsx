import { useEffect, useState } from "react";

const logoSrc = "/android-chrome-192x192.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-brand-bg text-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center gap-6 px-6 py-8">
        <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl opacity-60 animate-logo-pulse" />
        <div className="relative flex items-center justify-center bg-black/10 p-4 backdrop-blur-xl shadow-[0_0_120px_rgba(255,207,101,0.16)] rounded-3xl">
          <img
            src={logoSrc}
            alt="Travel Kings logo"
            loading="eager"
            decoding="async"
            className="h-20 w-20 object-contain animate-logo-glow"
          />
        </div>
        <p className="max-w-xs text-sm font-body text-brand-muted">
          Curated South India travel, designed for premium cinematic journeys.
        </p>
      </div>
    </div>
  );
}
