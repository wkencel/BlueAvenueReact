'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { trackLead } from '@/lib/analytics'
import { getImageSrc } from '@/lib/image'
import GirlDancing from '@/optimized-images/girl-dancing-nyc-wedding.webp'
import GuestDancing from '@/optimized-images/guest-dancing-wedding.webp'
import Band from '@/optimized-images/blue-avenue-groove-band.webp'
import Award2018 from '@/optimized-images/wedding-wire-couples-choice-2018.png'
import Award2020 from '@/optimized-images/wedding-wire-couples-choice-2020.png'
import Award2021 from '@/optimized-images/wedding-wire-couples-choice-2021.png'
import Award2022 from '@/optimized-images/wedding-wire-couples-choice-2022.png'
import Award2023 from '@/optimized-images/wedding-wire-couples-choice-2023.png'
import styles from './HomeV2.module.scss'

const liveVideos = [
  { title: 'Move On Up · Curtis Mayfield (live)', id: 'NtZLBObQ3PU' },
  { title: 'Use Me · Bill Withers (live)', id: 'jw4zzH1DVM0' },
  { title: 'As It Was / Take On Me (live)', id: 'jVUzk9YT06w' },
  { title: 'About Damn Time · Lizzo (live)', id: 'qQw_oftZmzI' },
]

const awards = [
  { src: Award2018, year: '2018' },
  { src: Award2020, year: '2020' },
  { src: Award2021, year: '2021' },
  { src: Award2022, year: '2022' },
  { src: Award2023, year: '2023' },
]

const reasons = [
  {
    title: 'Book the band, not an agency',
    body: 'You work directly with the bandleader, so you get the personal attention the big corporate companies just can’t match.',
  },
  {
    title: '6–12 pieces, male & female vocals',
    body: 'A horn-driven rhythm section with sax, trumpet and trombone, scaled to your room and your budget.',
  },
  {
    title: 'Funk, soul & Motown that fills the floor',
    body: 'From R&B and pop to rock. Real musicians who read the room and keep everyone dancing.',
  },
  {
    title: 'Ceremony to last dance',
    body: 'A trio for your ceremony, jazz for cocktail hour, and a powerhouse band for the reception.',
  },
  {
    title: 'Every generation dancing',
    body: 'From the three-year-old nephew to the grandparents, nobody stays in their seat.',
  },
  {
    title: '10+ years · 6× WeddingWire winners',
    body: 'Played The Plaza, Gotham Hall, Lighthouse at Chelsea Piers and lofts across all five boroughs.',
  },
]

const reviews = [
  {
    quote:
      'The thing I hear most often is “they are not a typical wedding band,” and trust me, that’s a compliment. They had everyone dancing, from our three-year-old nephew to the grandparents.',
    author: 'Elizabeth K.',
  },
  {
    quote:
      'By far the best band I have ever heard at a wedding. They energized the whole crowd, from a five-year-old to folks in their 70s. People have been talking about them ever since.',
    author: 'Aly P.',
  },
  {
    quote:
      'Not one of our 110 guests didn’t rave about the band. We chose them over the big corporate companies for the attention they gave us. Book ’em before they book your date.',
    author: 'Ben T.',
  },
]

const realWeddings = [
  {
    src: '/videos/rw-firstdance.mp4',
    poster: '/videos/rw-firstdance.jpg',
    caption: 'The first dance',
  },
  {
    src: '/videos/rw-rockleigh.mp4',
    poster: '/videos/rw-rockleigh.jpg',
    caption: 'The Rockleigh',
  },
  {
    src: '/videos/rw-wilburton.mp4',
    poster: '/videos/rw-wilburton.jpg',
    caption: 'Last song, full floor',
  },
]

export default function HomeV2() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const rwRef = useRef<HTMLElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const v = heroVideoRef.current
    if (!v) return
    // Ensure the element is treated as muted at the property level (React does
    // not reliably set the muted DOM property from the attribute), which some
    // browsers require before they will autoplay.
    v.muted = true
    v.defaultMuted = true
    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    tryPlay()
    v.addEventListener('loadeddata', tryPlay)
    v.addEventListener('canplay', tryPlay)
    // Fallback for iOS Low Power Mode / blocked autoplay: start on first gesture.
    const onGesture = () => tryPlay()
    window.addEventListener('touchstart', onGesture, { once: true, passive: true })
    window.addEventListener('scroll', onGesture, { once: true, passive: true })
    window.addEventListener('click', onGesture, { once: true })
    return () => {
      v.removeEventListener('loadeddata', tryPlay)
      v.removeEventListener('canplay', tryPlay)
      window.removeEventListener('touchstart', onGesture)
      window.removeEventListener('scroll', onGesture)
      window.removeEventListener('click', onGesture)
    }
  }, [])

  useEffect(() => {
    const el = rwRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const videos = Array.from(el.querySelectorAll('video'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            v.muted = true
            v.play().catch(() => {})
          } else {
            v.pause()
          }
        })
      },
      { threshold: 0.25 }
    )
    videos.forEach((v) => {
      v.muted = true
      io.observe(v)
    })
    return () => io.disconnect()
  }, [])

  const navLinks = (
    <>
      <Link href="/wedding-bands-nyc" onClick={() => setMenuOpen(false)}>Weddings</Link>
      <a href="#watch" onClick={() => setMenuOpen(false)}>Watch</a>
      <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
      <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
      <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    </>
  )

  return (
    <div className={styles.home}>
      {/* NAV */}
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>Blue Avenue Groove</Link>
          <nav className={styles.navLinks}>{navLinks}</nav>
          <Link href="/contact" className={styles.navCta}>Check Your Date</Link>
          <button
            className={styles.hamburger}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {menuOpen && (
          <nav className={styles.mobileMenu}>
            {navLinks}
            <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
              Check Your Date
            </Link>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroPoster}
          style={{ backgroundImage: `url(${getImageSrc(GirlDancing)})` }}
        />
        <div className={styles.heroVideo}>
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/hero-poster.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>★★★★★ &nbsp;6× WeddingWire Couples’ Choice</p>
          <h1>The NYC wedding band your guests won’t stop talking about</h1>
          <p className={styles.heroSub}>
            Live funk, soul &amp; Motown from a 6–12 piece band with male &amp;
            female lead vocals. From ceremony to the last dance.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.btnPrimary}>Check Your Date</Link>
            <a href="#watch" className={styles.btnGhost}>▶ Watch Us Live</a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trust}>
        <div className={styles.awards}>
          {awards.map((a) => (
            <img
              key={a.year}
              src={getImageSrc(a.src)}
              alt={`WeddingWire Couples' Choice ${a.year}`}
              loading="lazy"
            />
          ))}
        </div>
        <p className={styles.venues}>
          As seen at <strong>The Plaza</strong> · <strong>Gotham Hall</strong> ·{' '}
          <strong>Lighthouse at Chelsea Piers</strong> · Brooklyn’s top lofts
        </p>
      </section>

      {/* WATCH */}
      <section id="watch" className={styles.watch}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>See us live</span>
          <h2>Don’t take our word for it. Hear the room.</h2>
          <p>Real, unedited performances from real NYC weddings.</p>
        </div>
        <div className={styles.videoGrid}>
          {liveVideos.map((v) => (
            <div key={v.id} className={styles.videoCard}>
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder={0}
                />
              </div>
              <p>{v.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.center}>
          <Link href="/media" className={styles.btnOutline}>See all videos</Link>
        </div>
      </section>

      {/* WHY US */}
      <section
        className={styles.why}
        style={{
          backgroundImage: `linear-gradient(rgba(16,26,43,0.92), rgba(16,26,43,0.96)), url(${getImageSrc(Band)})`,
        }}
      >
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Not your typical wedding band</span>
          <h2>Why couples pick Blue Avenue Groove</h2>
        </div>
        <div className={styles.reasonGrid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.reasonCard}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className={styles.reviews}
        style={{
          backgroundImage: `linear-gradient(rgba(246,244,239,0.94), rgba(246,244,239,0.94)), url(${getImageSrc(GuestDancing)})`,
        }}
      >
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>★★★★★ on WeddingWire &amp; Google</span>
          <h2>Guests are still talking about it</h2>
        </div>
        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <blockquote key={r.author} className={styles.reviewCard}>
              <p>“{r.quote}”</p>
              <cite>— {r.author}</cite>
            </blockquote>
          ))}
        </div>
        <div className={styles.center}>
          <Link href="/reviews" className={styles.btnOutline}>Read more reviews</Link>
        </div>
      </section>

      {/* REAL WEDDINGS */}
      <section className={styles.realWeddings} ref={rwRef}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Real weddings</span>
          <h2>Real couples. Real dance floors.</h2>
          <p>
            A first dance, a packed ballroom, a tent that wouldn’t quit. Actual
            moments from Blue Avenue Groove weddings.
          </p>
        </div>
        <div className={styles.rwGrid}>
          {realWeddings.map((w) => (
            <figure key={w.src} className={styles.rwCard}>
              <video muted loop playsInline preload="none" poster={w.poster}>
                <source src={w.src} type="video/mp4" />
              </video>
              <figcaption className={styles.rwCaption}>{w.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Transparent pricing</span>
          <h2>Real numbers, no mystery quotes</h2>
          <p>
            Most bands make you chase a price. We put it right here so you can
            plan with confidence.
          </p>
        </div>
        <div className={styles.priceCard}>
          <div className={styles.priceAnchor}>
            <span className={styles.priceFrom}>Reception packages from</span>
            <span className={styles.priceBig}>$8,000</span>
            <span className={styles.priceNote}>
              6-piece band. Scale up to 12 pieces and add ceremony &amp;
              cocktail-hour sets. Most NYC weddings land between $10k and $14k.
            </span>
          </div>
          <ul className={styles.priceIncludes}>
            <li>Bandleader, powerhouse male &amp; female vocals and full horn section</li>
            <li>Pro sound &amp; engineer, planning calls and custom song requests</li>
            <li>Optional ceremony trio and jazz cocktail-hour set</li>
          </ul>
          <div className={styles.priceCtas}>
            <Link href="/contact" className={styles.btnPrimary}>Get a custom quote</Link>
            <Link href="/contact" className={styles.btnOutline}>Build an instant estimate</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <h2>Let’s check your date</h2>
        <p>
          Prime Saturdays book 9–14 months out. Tell us about your day and we’ll
          send a custom quote.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/contact" className={styles.btnPrimary}>Check Your Date</Link>
          <a
            href="tel:8572047853"
            className={styles.btnGhost}
            onClick={() => trackLead('phone_click')}
          >
            Call (857) 204-7853
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Blue Avenue Groove</div>
        <p className={styles.footerAreas}>
          Serving NYC · <Link href="/brooklyn-wedding-bands">Brooklyn</Link> ·{' '}
          <Link href="/manhattan-wedding-band">Manhattan</Link> ·{' '}
          <Link href="/queens-wedding-band">Queens</Link> ·{' '}
          <Link href="/bronx-wedding-band">Bronx</Link> ·{' '}
          <Link href="/staten-island-wedding-band">Staten Island</Link> ·{' '}
          <Link href="/westchester-wedding-band">Westchester</Link> ·{' '}
          <Link href="/long-island-wedding-band">Long Island</Link> ·{' '}
          <Link href="/hudson-valley-wedding-band">Hudson Valley</Link> ·{' '}
          <Link href="/new-jersey-wedding-band">New Jersey</Link>
        </p>
        <p className={styles.footerLinks}>
          <Link href="/wedding-band-song-list">Song List</Link> ·{' '}
          <Link href="/blog">Planning Tips</Link> ·{' '}
          <a href="https://www.instagram.com/blueavenuegroove/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} Blue Avenue Groove. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
