import Link from 'next/link'

const serviceAreas = [
  { href: '/wedding-bands-nyc', label: 'NYC' },
  { href: '/brooklyn-wedding-bands', label: 'Brooklyn' },
  { href: '/manhattan-wedding-band', label: 'Manhattan' },
  { href: '/queens-wedding-band', label: 'Queens' },
  { href: '/bronx-wedding-band', label: 'Bronx' },
  { href: '/staten-island-wedding-band', label: 'Staten Island' },
  { href: '/westchester-wedding-band', label: 'Westchester' },
  { href: '/long-island-wedding-band', label: 'Long Island' },
  { href: '/hudson-valley-wedding-band', label: 'Hudson Valley' },
  { href: '/new-jersey-wedding-band', label: 'New Jersey' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__areas">
        Blue Avenue Groove serves:{' '}
        {serviceAreas.map((area, i) => (
          <span key={area.href}>
            {i > 0 && ' / '}
            <Link href={area.href}>{area.label}</Link>
          </span>
        ))}
      </p>
      <p className="site-footer__copy">
        &copy; {new Date().getFullYear()} Blue Avenue Groove. All rights reserved.
      </p>
    </footer>
  )
}
