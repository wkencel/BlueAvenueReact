import type { Metadata } from 'next'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Blue Avenue Groove, including how we collect and use information and our SMS/text messaging practices.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/privacy/',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/privacy" />
      <main className="page-panel">
        <h1 className="major">Privacy Policy</h1>
        <p style={{ opacity: 0.85, marginTop: '-0.5rem' }}>Last updated: September 23, 2026</p>

        <p>
          This Privacy Policy explains how <strong>Blue Avenue Groove</strong> (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information in
          connection with our website <Link href="/">www.blueavenuegroove.com</Link>, our booking
          inquiries, and our text message (SMS) notifications.
        </p>

        <h2>Information we collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>
            <strong>Contact and event details</strong> you provide through our website contact
            form or through wedding marketplaces (such as your name, email address, phone number,
            wedding date, venue, and message).
          </li>
          <li>
            <strong>SMS sign-up information</strong> (name and mobile phone number) from people who
            sign up for booking-inquiry text notifications on our{' '}
            <Link href="/sms-optin/">text message sign-up page</Link>, along with a record of their
            consent.
          </li>
          <li>
            <strong>Usage information</strong> such as pages visited, collected through standard
            web analytics and cookies.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to your booking inquiry and communicate with you about your event.</li>
          <li>
            To send booking-inquiry text notifications to people who have signed up for them on our
            text message sign-up page, so new leads get a quick response.
          </li>
          <li>To operate, maintain, and improve our website and services.</li>
        </ul>

        <h2>SMS / text messaging</h2>
        <p>
          Blue Avenue Groove sends text message (SMS) notifications about new booking inquiries to
          people who sign up on our <Link href="/sms-optin/">text message sign-up page</Link> and
          check the consent box. These notifications are for the people who handle our booking
          inquiries. Customers do not need to sign up for texts to contact or book us, and consent
          is not a condition of any purchase or service. Each message includes the inquiry name and
          a link to review and reply. Message frequency varies based on the number of inquiries we
          receive. Message and data rates may apply.
        </p>
        <p>
          Recipients can opt out at any time by replying <strong>STOP</strong>, and can reply{' '}
          <strong>HELP</strong> for assistance. Opting out will stop further text messages to that
          number.
        </p>
        <p>
          <strong>
            We do not sell or share your SMS opt-in data or personal information with third parties
            for marketing purposes.
          </strong>{' '}
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging opt-in data and consent will not be shared with any
          third parties, except service providers (such as our SMS provider) that need it to
          deliver messages.
        </p>

        <h2>How we share information</h2>
        <p>
          We do not sell your personal information. We may share information with service providers
          who help us operate our website and messaging (for example, our hosting, email, and SMS
          providers), only as needed to provide those services and subject to appropriate
          confidentiality obligations.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep inquiry and contact information only as long as needed to respond to you and to
          run our business, and then delete or de-identify it.
        </p>

        <h2>Your choices</h2>
        <p>
          You may request that we update or delete your information, or stop contacting you, by
          emailing us. For text messages, reply STOP to opt out at any time.
        </p>

        <h2>Contact us</h2>
        <p>
          Blue Avenue Groove
          <br />
          Email: <a href="mailto:blueavenuegroove@gmail.com">blueavenuegroove@gmail.com</a>
          <br />
          Website: <Link href="/">www.blueavenuegroove.com</Link>
        </p>

        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/" className="button special">
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
