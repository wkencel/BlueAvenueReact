import type { Metadata } from 'next'
import Link from 'next/link'
import PageNav from '@/components/PageNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions for Blue Avenue Groove, including SMS/text messaging terms.',
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/terms/',
  },
}

export default function TermsPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav current="/terms" />
      <main className="page-panel">
        <h1 className="major">Terms &amp; Conditions</h1>
        <p style={{ opacity: 0.85, marginTop: '-0.5rem' }}>Last updated: September 23, 2026</p>

        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the website and
          services of <strong>Blue Avenue Groove</strong> (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), including <Link href="/">www.blueavenuegroove.com</Link>. By using our
          website or services, you agree to these Terms.
        </p>

        <h2>Our services</h2>
        <p>
          Blue Avenue Groove provides live music and entertainment services for weddings and
          events. Bookings, pricing, and event details are confirmed directly with us in writing.
          Information on this website is provided for general purposes and may change without
          notice.
        </p>

        <h2>SMS Terms</h2>
        <p>
          Blue Avenue Groove sends booking-inquiry notification texts to people who sign up on our{' '}
          <Link href="/sms-optin/">text message sign-up page</Link> and check the consent box.
          These texts are for the people who handle our booking inquiries. Signing up is optional
          and is not a condition of using our website or booking our services. By opting in, a
          recipient agrees to receive text messages from Blue Avenue Groove related to booking
          inquiries.
        </p>
        <ul>
          <li>
            <strong>Program description:</strong> recipients receive a text when a new booking
            inquiry arrives, containing the inquiry name and a link to review and respond.
          </li>
          <li>
            <strong>Message frequency:</strong> varies based on the number of inquiries received.
          </li>
          <li>
            <strong>Message and data rates may apply.</strong>
          </li>
          <li>
            <strong>Opt out:</strong> reply <strong>STOP</strong> at any time to stop receiving
            messages.
          </li>
          <li>
            <strong>Help:</strong> reply <strong>HELP</strong> for assistance, or contact us at the
            email below.
          </li>
          <li>
            <strong>Carriers:</strong> wireless carriers are not liable for delayed or undelivered
            messages.
          </li>
        </ul>
        <p>
          We do not sell or share SMS opt‑in data or personal information with third parties for
          marketing purposes. See our <Link href="/privacy">Privacy Policy</Link> for details on how
          we handle information.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The content on this website, including text, images, audio, and video, is owned by or
          licensed to Blue Avenue Groove and may not be reproduced without permission.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Blue Avenue Groove is not liable for any indirect
          or incidental damages arising from your use of this website. Services are provided under
          the terms of your individual booking agreement with us.
        </p>

        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of our website or services
          after changes are posted constitutes acceptance of the updated Terms.
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
