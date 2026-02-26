'use client'

import React from 'react'
import Link from 'next/link'
import ContactUs from '@/components/ContactUs'

export default function GuideContent() {
  return (
    <>
      <h1 className="major">The Ultimate Wedding Band Guide</h1>
      <h2>Selecting the Perfect Soundtrack for Your Big Day</h2>

      <img
        src="/images/blogImages/the-ultimate-wedding-band-guide_img1.webp"
        alt="Live wedding band performing at NYC reception"
        width="100%"
        loading="lazy"
        style={{ borderRadius: '10px', margin: '1.5rem 0' }}
      />

      <h2 className="major">Why Your Wedding Band Matters More Than You Think</h2>
      <p>
        Here&apos;s something we&apos;ve seen over and over in 10+ years of playing
        weddings: couples spend months choosing flowers and linens, then give themselves
        about 15 minutes to figure out music. But when the night&apos;s over, nobody
        talks about the centerpieces. They talk about the moment the dance floor opened
        up and everybody lost it.
      </p>
      <p>
        Music is the thing that makes people feel something. It sets the pace of the
        entire night. Get it right and your guests are telling stories for years. Get it
        wrong and even the best food and venue can feel flat.
      </p>

      <h2 className="major">Live Band vs. DJ: An Honest Take</h2>
      <p>
        We&apos;re a band, so obviously we&apos;re biased. But here&apos;s the truth:
        DJs are a great fit for some weddings. If you want deep cuts, seamless mixing
        between genres, or a very specific playlist played exactly as recorded, a DJ
        makes sense.
      </p>
      <p>
        What a live band brings is different. It&apos;s energy you can feel in your chest.
        It&apos;s musicians reading the room and adjusting in real time. It&apos;s the
        moment the sax player steps forward for a solo and the crowd erupts. There&apos;s
        a human connection between performers and guests that a playlist can&apos;t
        replicate, no matter how good the speakers are.
      </p>
      <p>
        Some couples go with both: a DJ for cocktail hour or transitions, and a live band
        for the reception. That works too. The point is to think about what kind of energy
        you want in the room and work backward from there.
      </p>

      <h2 className="major">What to Look For in a Wedding Band</h2>
      <p>
        Not all wedding bands are created equal. Here&apos;s what actually matters:
      </p>
      <ul>
        <li>
          <strong><Link href="/wedding-band-song-list">Repertoire range.</Link></strong> You want a band that can move between Motown
          and Top 40 and make both feel natural. A band locked into one genre is going to
          lose part of your crowd.
        </li>
        <li>
          <strong>They read the room.</strong> This is the big one. A great wedding band
          doesn&apos;t just play a setlist. They watch the floor, feel the energy, and
          adjust. If people are vibing on funk, you stay in that pocket. If the energy
          dips, you know how to bring it back.
        </li>
        <li>
          <strong>Professionalism behind the scenes.</strong> Sound checks, load-in,
          setup, teardown, MC duties, coordinating with your venue and planner. The best
          bands handle all of this so you don&apos;t have to think about it.
        </li>
        <li>
          <strong>Live video, not just studio recordings.</strong> Studio tracks tell you
          a band can play. Live video tells you how they perform. There&apos;s a big
          difference.
        </li>
      </ul>

      <h2 className="major">How the Night Should Flow</h2>
      <p>
        Wedding music isn&apos;t one thing. It&apos;s three or four different vibes
        across the course of an evening, and each one matters.
      </p>
      <h3>Ceremony</h3>
      <p>
        This is intimate and emotional. A solo pianist, a vocalist with guitar, or a
        small duo is usually the right fit. You want something that makes the walk down
        the aisle feel like a moment, not a production.
      </p>
      <h3>Cocktail Hour</h3>
      <p>
        The energy shifts. People are mingling, getting drinks, catching up. This is
        where a jazz trio, a sax-and-keys duo, or a solo pianist sets the perfect tone.
        Warm, sophisticated, not competing with conversation.{' '}
        <Link href="/services">We offer ensembles from solo to quartet for cocktail hour.</Link>
      </p>
      <h3>Reception</h3>
      <p>
        This is where it all opens up. A full band, four hours of energy, building from
        dinner music into a packed dance floor. The first dance, the parent dances, the
        moment when the whole room is singing along. This is what people remember.
      </p>

      <img
        src="/images/blogImages/the-ultimate-wedding-band-guide_img5.jpeg"
        alt="Wedding guests dancing at reception"
        width="100%"
        loading="lazy"
        style={{ borderRadius: '10px', margin: '1.5rem 0' }}
      />

      <h2 className="major">Questions to Ask Before You Book</h2>
      <p>
        When you&apos;re talking to a band, these are the questions that actually tell
        you what you need to know:
      </p>
      <ul>
        <li>Can you learn a specific song for our first dance?</li>
        <li>What happens if a band member gets sick the day of?</li>
        <li>Do you bring your own sound system and engineer?</li>
        <li>How do you handle MC duties and announcements?</li>
        <li>What does setup and teardown look like? How much time do you need?</li>
        <li>How many breaks do you take, and what happens during breaks?</li>
        <li>Have you played our venue before? Any logistical things to know?</li>
      </ul>
      <p>
        A band that answers these confidently and specifically has done this before. Vague
        answers are a red flag.
      </p>

      <h2 className="major">When to Start Looking</h2>
      <p>
        The best wedding bands in NYC book up fast, especially for peak season (May
        through October). We recommend starting your search 6 to 12 months before your
        date. That gives you time to see bands live, compare options, and lock in your
        pick before the calendar fills up.
      </p>
      <p>
        The process usually goes: initial conversation about your wedding and what
        you&apos;re looking for, a proposal with options and pricing, and then booking.
        Most bands ask for a deposit to hold the date.
      </p>

      <h2 className="major">Ready to Talk?</h2>
      <p>
        We&apos;d love to hear about your wedding. Tell us about your day, the vibe
        you&apos;re going for, and any must-play songs. We&apos;ll put something together
        that fits.
      </p>
      <h3>Send us a message</h3>
      <ContactUs />
      <Link href="/blog" className="button">Back to Blog</Link>
    </>
  )
}
