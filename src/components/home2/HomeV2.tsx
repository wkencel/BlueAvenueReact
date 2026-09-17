'use client'

import React, { useEffect, useState } from 'react'
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

const HERO_VIDEO_ID = 'qQw_oftZmzI' // About Damn Time (Lizzo)
const HERO_START = 32
const HERO_END = 60

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
    title: '6–12 pieces, two lead vocalists',
    body: 'Male & female vocals and a horn-driven rhythm section, scaled to your room and your budget.',
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

export default function HomeV2() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero background video: loop just the 0:32–1:00 window via the YouTube
  // IFrame Player API (the simple start/end params reset to 0 on loop).
  useEffect(() => {
    const w = window as unknown as Record<string, any>
    let player: any
    let cancelled = false

    function createPlayer() {
      if (cancelled || !w.YT || !w.YT.Player) return
      player = new w.YT.Player('bag-hero-player', {
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          start: HERO_START,
          end: HERO_END,
          cc_load_policy: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute()
            e.target.playVideo()
          },
          onStateChange: (e: any) => {
            if (e.data === w.YT.PlayerState.ENDED) {
              e.target.seekTo(HERO_START)
              e.target.playVideo()
            }
          },
        },
      })
    }

    if (w.YT && w.YT.Player) {
      createPlayer()
    } else {
      if (!document.getElementById('yt-iframe-api')) {
        const tag = document.createElement('script')
        tag.id = 'yt-iframe-api'
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
      const prev = w.onYouTubeIframeAPIReady
      w.onYouTubeIframeAPIReady = () => {
        if (typeof prev === 'function') prev()
        createPlayer()
      }
    }

    return () => {
      cancelled = true
      if (player && player.destroy) player.destroy()
    }
  }, [])

  const navLinks = (
    <>
      <Link href="/wedding-bands-nyc" onClick={() => setMenuOpen(false)}>Weddings</Link>
      <a href="#watch" onClick={() => setMenuOpen(false)}>Watch</a>
      <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
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
          <div id="bag-hero-player" />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>★★★★★ &nbsp;6× WeddingWire Couples’ Choice</p>
          <h1>The NYC wedding band your guests won’t stop talking about</h1>
          <p className={styles.heroSub}>
            Live funk, soul &amp; Motown from a 6–12 piece band with two lead
            vocalists. From cocktail hour to the last dance.
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

      {/* PRICING TEASER */}
      <section className={styles.pricing}>
        <div className={styles.pricingInner}>
          <div>
            <span className={styles.kicker}>Transparent pricing</span>
            <h2>No mystery quotes. See an instant estimate.</h2>
            <p>
              Most bands make you chase a number. We don’t. Tell us your date,
              band size and hours and get a real estimate in minutes.
            </p>
          </div>
          <Link href="/contact" className={styles.btnPrimary}>Get your estimate</Link>
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
