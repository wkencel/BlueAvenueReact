import type { Metadata } from 'next'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Text Message Sign-Up',
  description:
    'Sign up to receive text message notifications from Blue Avenue Groove. Message and data rates may apply. Reply STOP to opt out.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/sms-optin/',
  },
  // Compliance/utility page (SMS consent). Keep it live for carrier requirements
  // but out of search: noindex, follow so it does not sit in the index as a thin page.
  robots: { index: false, follow: true },
}

export default function SmsOptInPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/sms-optin" />
      <main className="page-panel">
        <h1 className="major">Text Message Sign-Up</h1>
        <p style={{ opacity: 0.85, marginTop: '-0.5rem' }}>
          Sign up to receive text message (SMS) notifications from Blue Avenue Groove.
        </p>

        <p>
          Blue Avenue Groove sends text notifications about new booking inquiries to the people who
          handle those inquiries, so each lead gets a quick response. To receive these texts, enter
          your name and mobile number and check the optional consent box below. Customers do not
          need to sign up for texts: signing up is optional and is not required to contact, book, or
          do business with Blue Avenue Groove.
        </p>

        <form
          action="https://formsubmit.co/blueavenuegroove@gmail.com"
          method="POST"
          style={{ maxWidth: 460, marginTop: '1rem' }}
        >
          <input type="hidden" name="_subject" value="New SMS opt-in — Blue Avenue Groove" />
          <input type="hidden" name="_template" value="table" />

          <label htmlFor="name" style={{ display: 'block', marginBottom: 4 }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            style={{ width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ccc' }}
          />

          <label htmlFor="phone" style={{ display: 'block', marginBottom: 4 }}>
            Mobile phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 555-5555"
            style={{ width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ccc' }}
          />

          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '10px 0 16px' }}>
            <input type="checkbox" name="sms_consent" value="yes" style={{ marginTop: 4 }} />
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>
              <strong>(Optional)</strong> By checking this box, I agree to receive text message
              notifications from{' '}
              <strong>Blue Avenue Groove</strong> at the mobile number provided. Message frequency
              varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our{' '}
              <Link href="/privacy/">Privacy Policy</Link> and <Link href="/terms/">Terms &amp; Conditions</Link>.
              Consent is not a condition of any purchase or service.
            </span>
          </label>

          <button type="submit" className="button special">
            Sign up for texts
          </button>
        </form>

        <p style={{ fontSize: 13, opacity: 0.8, marginTop: '1.25rem' }}>
          You can opt out at any time by replying STOP, or reply HELP for help. We do not sell or
          share your SMS opt-in data or personal information with third parties for marketing
          purposes.
        </p>

        <div style={{ marginTop: '1.25rem' }}>
          <Link href="/" className="button">
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
