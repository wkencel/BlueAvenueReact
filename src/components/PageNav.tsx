import Link from 'next/link'

const navItems = [
  { href: '/wedding-event-services', label: 'Services' },
  { href: '/media', label: 'Media' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function PageNav({ current }: { current?: string }) {
  return (
    <nav className="page-nav">
      <Link href="/" className="page-nav-home" aria-label="Blue Avenue Groove home">
        <img src="/icons/icon-192x192.png" alt="Blue Avenue Groove" width={40} height={40} />
      </Link>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={current === item.href ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="page-nav-cta">Check Your Date</Link>
    </nav>
  )
}
