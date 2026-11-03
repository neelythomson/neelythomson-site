// One function for every conversion event on the site. GA4 receives them when
// NEXT_PUBLIC_GA_ID is set; otherwise the call is a no-op, so components can
// always call it.

export type EventName =
  | "diagnostic_cta_click"
  | "book_call_click"
  | "form_submit"
  | "form_error"
  | "case_study_pdf"
  | "email_click"
  | "linkedin_click";

type Gtag = (...args: unknown[]) => void;

export function track(name: EventName, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
