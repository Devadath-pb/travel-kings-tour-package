type AnalyticsEvent =
  | "page_view"
  | "package_click"
  | "inquiry_open"
  | "inquiry_submit"
  | "mobile_engagement";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: AnalyticsPayload }) => void;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

function injectScript(src: string, attrs: Record<string, string> = {}) {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (typeof window === "undefined") return;

  if (gaId) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`);
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
    window.gtag("js", new Date());
    window.gtag("config", gaId, { send_page_view: false });
  }

  if (plausibleDomain) {
    injectScript("https://plausible.io/js/script.js", {
      "data-domain": plausibleDomain,
      defer: "true",
    });
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", event, payload);
  }

  if (window.plausible) {
    window.plausible(event, { props: payload });
  }
}

export function trackPageView(path: string, title: string) {
  if (window.gtag && gaId) {
    window.gtag("config", gaId, {
      page_path: path,
      page_title: title,
    });
  }

  if (window.plausible) {
    window.plausible("pageview", { props: { path, title } });
  }

  trackEvent("page_view", { path, title });
}

