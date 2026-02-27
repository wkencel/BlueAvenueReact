import Link from 'next/link'

const navItems = [
  { href: '/wedding-event-services', label: 'Events' },
  { href: '/media', label: 'Media' },
  { href: '/about', label: 'People' },
  { href: '/contact', label: 'Contact' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
]

export default function PageNav({ current }: { current?: string }) {
  return (
    <nav className="page-nav">
      <Link href="/" className="page-nav-home">Blue Avenue Groove</Link>
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
    </nav>
  )
}
