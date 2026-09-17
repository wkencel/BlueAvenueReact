// Conversion tracking (Google tag — Google Ads + GA4).
//
// The Google tag / Ads Conversion ID and the per-action conversion labels are
// NOT secret — they ship in the page HTML — so they live as constants here and
// can be overridden per build via env vars.
//
// To disable tracking entirely, set NEXT_PUBLIC_GTAG_ID='' (empty). Then nothing
// loads and no data is sent.

// Google Ads Conversion ID (also serves as the base Google tag). GA4 'G-…' also works.
export const GTAG_ID: string = process.env.NEXT_PUBLIC_GTAG_ID ?? 'AW-18456227136'

// Google Ads conversion "send_to" values (Conversion ID / label) per lead source.
// A source with no entry (or an empty value) simply doesn't report an Ads conversion.
const ADS_CONVERSION_BY_SOURCE: Record<string, string> = {
  contact_form:
    process.env.NEXT_PUBLIC_ADS_CONVERSION_CONTACT ?? 'AW-18456227136/zwsVCJqqtPocEMDazuBE',
}

type GtagParams = Record<string, unknown>

/** Fire a gtag event if the tag is loaded; safe no-op otherwise. */
export function gtagEvent(action: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== 'function') return
  w.gtag('event', action, params)
}

/**
 * A lead was generated (form submit, phone tap, booking).
 * Always fires the GA4 'generate_lead' event, and additionally fires a Google
 * Ads 'conversion' event when the source maps to a configured conversion action.
 */
export function trackLead(source: string, params: GtagParams = {}): void {
  gtagEvent('generate_lead', { lead_source: source, ...params })
  const sendTo = ADS_CONVERSION_BY_SOURCE[source]
  if (sendTo) {
    gtagEvent('conversion', { send_to: sendTo, value: 1.0, currency: 'USD' })
  }
}
