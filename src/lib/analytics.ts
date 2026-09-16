// Conversion tracking (Google tag — GA4 or Google Ads).
//
// TO ACTIVATE: set your ID once the Google Ads / GA4 account exists, either by
//   1) build-time env var:  NEXT_PUBLIC_GTAG_ID=G-XXXXXXX (or AW-XXXXXXXXX), or
//   2) editing the fallback constant below.
// Until an ID is set this is a complete no-op — nothing loads and no data is sent.
//
// For Google Ads conversions, also pass a send_to value, e.g.:
//   trackLead('contact_form', { send_to: 'AW-XXXXXXXXX/AbC-D_efGhIjKlMnOp' })

export const GTAG_ID: string = process.env.NEXT_PUBLIC_GTAG_ID ?? ''

type GtagParams = Record<string, unknown>

/** Fire a gtag event if the tag is loaded; safe no-op otherwise. */
export function gtagEvent(action: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== 'function') return
  w.gtag('event', action, params)
}

/** A lead was generated (form submit, phone tap, booking). */
export function trackLead(source: string, params: GtagParams = {}): void {
  gtagEvent('generate_lead', { lead_source: source, ...params })
}
