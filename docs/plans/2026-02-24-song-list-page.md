# Song List Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the external Google Sheet repertoire link with an internal `/wedding-band-song-list` page to capture SEO value and keep visitors on-site.

**Architecture:** New route following the existing `page.tsx` (server, metadata) + `content.tsx` (client, UI) pattern. Song data lives in `src/data/songs.ts`. Three existing files get minor edits to add internal links.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript

---

### Task 1: Create Song Data File

**Files:**
- Create: `src/data/songs.ts`

**Step 1: Create the data file with all ~200+ songs**

```ts
export type Genre =
  | 'Contemporary/Pop'
  | 'Motown/Funk/Soul'
  | 'Rock'
  | 'Ballads/Jazz'
  | 'Reggae & More'

export interface Song {
  title: string
  artist: string
  genre: Genre
}

export const genres: Genre[] = [
  'Contemporary/Pop',
  'Motown/Funk/Soul',
  'Rock',
  'Ballads/Jazz',
  'Reggae & More',
]

export const songs: Song[] = [
  // Contemporary/Pop
  { title: '1999', artist: 'Prince', genre: 'Contemporary/Pop' },
  { title: '24K Magic', artist: 'Bruno Mars', genre: 'Contemporary/Pop' },
  { title: 'About Damn Time', artist: 'Lizzo', genre: 'Contemporary/Pop' },
  { title: 'Adore You', artist: 'Harry Styles', genre: 'Contemporary/Pop' },
  { title: "Ain't Nobody", artist: 'Chaka Khan', genre: 'Contemporary/Pop' },
  { title: 'All Night Long', artist: 'Lionel Richie', genre: 'Contemporary/Pop' },
  { title: 'American Boy', artist: 'Estelle', genre: 'Contemporary/Pop' },
  { title: 'As It Was', artist: 'Harry Styles', genre: 'Contemporary/Pop' },
  { title: 'Back Pocket', artist: 'Vulfpeck', genre: 'Contemporary/Pop' },
  { title: 'Best Of My Love', artist: 'The Emotions', genre: 'Contemporary/Pop' },
  { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Contemporary/Pop' },
  { title: 'Bootylicious', artist: "Destiny's Child", genre: 'Contemporary/Pop' },
  { title: 'California Gurls', artist: 'Katy Perry', genre: 'Contemporary/Pop' },
  { title: 'Call Me Maybe', artist: 'Carly Rae Jepsen', genre: 'Contemporary/Pop' },
  { title: "Can't Stop The Feeling", artist: 'Justin Timberlake', genre: 'Contemporary/Pop' },
  { title: 'Crazy', artist: 'Gnarls Barkley', genre: 'Contemporary/Pop' },
  { title: 'Crazy In Love', artist: 'Beyonce', genre: 'Contemporary/Pop' },
  { title: 'Dance the Night Away', artist: 'Dua Lipa', genre: 'Contemporary/Pop' },
  { title: 'Dancing in the Moonlight', artist: 'King Harvest', genre: 'Contemporary/Pop' },
  { title: 'Dancing Queen', artist: 'ABBA', genre: 'Contemporary/Pop' },
  { title: 'Dec. 1963 (Oh What a Night)', artist: 'Frankie Valli & 4 Seasons', genre: 'Contemporary/Pop' },
  { title: 'Die With a Smile', artist: 'Lady Gaga & Bruno Mars', genre: 'Contemporary/Pop' },
  { title: 'Distance', artist: 'Emily King', genre: 'Contemporary/Pop' },
  { title: "Don't Stop Me Now", artist: 'Queen', genre: 'Contemporary/Pop' },
  { title: "Don't Start Now", artist: 'Dua Lipa', genre: 'Contemporary/Pop' },
  { title: "Don't You Worry 'Bout a Thing", artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: 'Empire State of Mind', artist: 'Alicia Keys & Jay Z', genre: 'Contemporary/Pop' },
  { title: 'Espresso', artist: 'Sabrina Carpenter', genre: 'Contemporary/Pop' },
  { title: 'Everybody Wants to Rule the World', artist: 'Tears For Fears', genre: 'Contemporary/Pop' },
  { title: 'Fantasy', artist: 'Mariah Carey', genre: 'Contemporary/Pop' },
  { title: 'Forever Young', artist: 'Rod Stewart', genre: 'Contemporary/Pop' },
  { title: 'Get Lucky', artist: 'Pharrell & Daft Punk', genre: 'Contemporary/Pop' },
  { title: 'Good As Hell', artist: 'Lizzo', genre: 'Contemporary/Pop' },
  { title: 'Good Luck, Babe!', artist: 'Chappell Roan', genre: 'Contemporary/Pop' },
  { title: 'Happy', artist: 'Pharrell', genre: 'Contemporary/Pop' },
  { title: 'Hey Ya', artist: 'Outkast', genre: 'Contemporary/Pop' },
  { title: 'Higher Ground', artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: 'HOT TO GO!', artist: 'Chappell Roan', genre: 'Contemporary/Pop' },
  { title: 'Holiday', artist: 'Madonna', genre: 'Contemporary/Pop' },
  { title: "I Can't Feel My Face", artist: 'The Weeknd', genre: 'Contemporary/Pop' },
  { title: 'I Love It', artist: 'Icona Pop', genre: 'Contemporary/Pop' },
  { title: 'I Wanna Dance With Somebody', artist: 'Whitney Houston', genre: 'Contemporary/Pop' },
  { title: 'I Want It That Way', artist: 'Backstreet Boys', genre: 'Contemporary/Pop' },
  { title: 'I Want You Back', artist: 'Jackson 5', genre: 'Contemporary/Pop' },
  { title: 'I Wish', artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: "I'm Gonna Be (500 Miles)", artist: 'The Proclaimers', genre: 'Contemporary/Pop' },
  { title: 'Juice', artist: 'Lizzo', genre: 'Contemporary/Pop' },
  { title: 'Kiss', artist: 'Prince', genre: 'Contemporary/Pop' },
  { title: 'Lady Marmalade', artist: 'Patti Labelle', genre: 'Contemporary/Pop' },
  { title: 'Levitating', artist: 'Dua Lipa', genre: 'Contemporary/Pop' },
  { title: 'Like a Prayer', artist: 'Madonna', genre: 'Contemporary/Pop' },
  { title: 'Like a Virgin', artist: 'Madonna', genre: 'Contemporary/Pop' },
  { title: 'Locked Out of Heaven', artist: 'Bruno Mars', genre: 'Contemporary/Pop' },
  { title: 'Love On Top', artist: 'Beyonce', genre: 'Contemporary/Pop' },
  { title: 'Love Story', artist: 'Taylor Swift', genre: 'Contemporary/Pop' },
  { title: 'Mercy', artist: 'Duffy', genre: 'Contemporary/Pop' },
  { title: 'No Diggity', artist: 'Blackstreet', genre: 'Contemporary/Pop' },
  { title: 'No Scrubs', artist: 'TLC', genre: 'Contemporary/Pop' },
  { title: 'Ophelia', artist: 'Lumineers', genre: 'Contemporary/Pop' },
  { title: 'P.Y.T', artist: 'Michael Jackson', genre: 'Contemporary/Pop' },
  { title: 'Please, Please, Please', artist: 'Sabrina Carpenter', genre: 'Contemporary/Pop' },
  { title: 'Pony', artist: 'Ginuwine', genre: 'Contemporary/Pop' },
  { title: 'Raise Your Glass', artist: 'Pink', genre: 'Contemporary/Pop' },
  { title: 'Rather Be', artist: 'Clean Bandit', genre: 'Contemporary/Pop' },
  { title: 'Rehab', artist: 'Amy Winehouse', genre: 'Contemporary/Pop' },
  { title: 'Rock With You', artist: 'Michael Jackson', genre: 'Contemporary/Pop' },
  { title: 'September', artist: 'Earth, Wind & Fire', genre: 'Contemporary/Pop' },
  { title: 'Shake It Off', artist: 'Taylor Swift', genre: 'Contemporary/Pop' },
  { title: 'Shake Your Body Down', artist: 'Michael Jackson', genre: 'Contemporary/Pop' },
  { title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Contemporary/Pop' },
  { title: 'Signed, Sealed, Delivered', artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: 'Sir Duke', artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: 'Stay With Me', artist: 'Sam Smith', genre: 'Contemporary/Pop' },
  { title: 'Superstition', artist: 'Stevie Wonder', genre: 'Contemporary/Pop' },
  { title: 'Sweet Caroline', artist: 'Neil Diamond', genre: 'Contemporary/Pop' },
  { title: 'Tears Dry on Their Own', artist: 'Amy Winehouse', genre: 'Contemporary/Pop' },
  { title: 'The Way You Make Me Feel', artist: 'Michael Jackson', genre: 'Contemporary/Pop' },
  { title: 'This Love', artist: 'Maroon 5', genre: 'Contemporary/Pop' },
  { title: 'This Must Be The Place (Naive Melody)', artist: 'Talking Heads', genre: 'Contemporary/Pop' },
  { title: 'Survivor', artist: "Destiny's Child", genre: 'Contemporary/Pop' },
  { title: 'Treasure', artist: 'Bruno Mars', genre: 'Contemporary/Pop' },
  { title: 'Under Pressure', artist: 'Queen & David Bowie', genre: 'Contemporary/Pop' },
  { title: 'Uptown Funk', artist: 'Bruno Mars', genre: 'Contemporary/Pop' },
  { title: 'Valerie', artist: 'Amy Winehouse', genre: 'Contemporary/Pop' },
  { title: 'Viva La Vida', artist: 'Coldplay', genre: 'Contemporary/Pop' },
  { title: 'Waiting on the World to Change', artist: 'John Mayer', genre: 'Contemporary/Pop' },
  { title: 'Walking On Sunshine', artist: 'Katrina & The Waves', genre: 'Contemporary/Pop' },
  { title: 'Wanna Be Your Lover', artist: 'Prince', genre: 'Contemporary/Pop' },
  { title: 'Wannabe', artist: 'Spice Girls', genre: 'Contemporary/Pop' },
  { title: 'Waterfalls', artist: 'TLC', genre: 'Contemporary/Pop' },
  { title: 'Watermelon Sugar', artist: 'Harry Styles', genre: 'Contemporary/Pop' },
  { title: 'We Found Love', artist: 'Rihanna', genre: 'Contemporary/Pop' },
  { title: "What You Don't Do", artist: 'Lianne La Havas', genre: 'Contemporary/Pop' },
  { title: 'You Are The Best Thing', artist: 'Ray LaMontagne', genre: 'Contemporary/Pop' },
  { title: 'You Can Call Me Al', artist: 'Paul Simon', genre: 'Contemporary/Pop' },
  { title: 'You Make My Dreams', artist: 'Hall & Oates', genre: 'Contemporary/Pop' },

  // Motown/Funk/Soul
  { title: "Ain't No Mountain High", artist: 'Marvin Gaye & Tammi Terrell', genre: 'Motown/Funk/Soul' },
  { title: "Ain't No Sunshine", artist: 'Bill Withers', genre: 'Motown/Funk/Soul' },
  { title: "Ain't Too Proud To Beg", artist: 'Temptations', genre: 'Motown/Funk/Soul' },
  { title: 'Baby, I Love You', artist: 'Aretha Franklin', genre: 'Motown/Funk/Soul' },
  { title: 'Bad Girls', artist: 'Donna Summer', genre: 'Motown/Funk/Soul' },
  { title: 'Brick House', artist: 'Commodores', genre: 'Motown/Funk/Soul' },
  { title: 'Bring It On Home', artist: 'Sam Cooke', genre: 'Motown/Funk/Soul' },
  { title: "Cruisin'", artist: 'Smokey Robinson', genre: 'Motown/Funk/Soul' },
  { title: 'Dancing in the Street', artist: 'Martha & the Vandellas', genre: 'Motown/Funk/Soul' },
  { title: 'Forget You', artist: 'CeeLo Green', genre: 'Motown/Funk/Soul' },
  { title: 'Georgia on My Mind', artist: 'Ray Charles', genre: 'Motown/Funk/Soul' },
  { title: 'God Only Knows', artist: 'Beach Boys', genre: 'Motown/Funk/Soul' },
  { title: 'Groove Me', artist: 'King Floyd', genre: 'Motown/Funk/Soul' },
  { title: 'Groove Tonight', artist: 'Earth, Wind & Fire', genre: 'Motown/Funk/Soul' },
  { title: 'Heard It Through the Grapevine', artist: 'Marvin Gaye', genre: 'Motown/Funk/Soul' },
  { title: 'How Sweet It Is (To Be Loved by You)', artist: 'James Taylor', genre: 'Motown/Funk/Soul' },
  { title: "Can't Take My Eyes Off You", artist: 'Frankie Valli', genre: 'Motown/Funk/Soul' },
  { title: 'I Got You (I Feel Good)', artist: 'James Brown', genre: 'Motown/Funk/Soul' },
  { title: 'I Will Survive', artist: 'Gloria Gaynor', genre: 'Motown/Funk/Soul' },
  { title: "I'll Take You There", artist: 'Staple Singers', genre: 'Motown/Funk/Soul' },
  { title: "Isn't She Lovely", artist: 'Stevie Wonder', genre: 'Motown/Funk/Soul' },
  { title: 'Just The Two of Us', artist: 'Grover Washington feat. Bill Withers', genre: 'Motown/Funk/Soul' },
  { title: "Let's Get It On", artist: 'Marvin Gaye', genre: 'Motown/Funk/Soul' },
  { title: "Let's Stay Together", artist: 'Al Green', genre: 'Motown/Funk/Soul' },
  { title: 'Love and Happiness', artist: 'Al Green', genre: 'Motown/Funk/Soul' },
  { title: 'Love Train', artist: "The O'Jays", genre: 'Motown/Funk/Soul' },
  { title: 'Lovely Day', artist: 'Bill Withers', genre: 'Motown/Funk/Soul' },
  { title: 'Move On Up', artist: 'Curtis Mayfield', genre: 'Motown/Funk/Soul' },
  { title: 'My Girl', artist: 'Temptations', genre: 'Motown/Funk/Soul' },
  { title: '(You Make Me Feel Like) A Natural Woman', artist: 'Aretha Franklin', genre: 'Motown/Funk/Soul' },
  { title: 'Never Too Much', artist: 'Luther Vandross', genre: 'Motown/Funk/Soul' },
  { title: 'Play That Funky Music', artist: 'Wild Cherry', genre: 'Motown/Funk/Soul' },
  { title: 'Proud Mary', artist: 'Tina Turner', genre: 'Motown/Funk/Soul' },
  { title: 'Respect', artist: 'Aretha Franklin', genre: 'Motown/Funk/Soul' },
  { title: 'Rock Steady', artist: 'Aretha Franklin', genre: 'Motown/Funk/Soul' },
  { title: 'Rolling In The Deep', artist: 'Adele', genre: 'Motown/Funk/Soul' },
  { title: 'Shout', artist: 'Otis Day & The Knights', genre: 'Motown/Funk/Soul' },
  { title: 'Some Kind of Wonderful', artist: 'Grand Funk Railroad', genre: 'Motown/Funk/Soul' },
  { title: 'Son of a Preacher Man', artist: 'Dusty Springfield', genre: 'Motown/Funk/Soul' },
  { title: "Stayin' Alive", artist: 'Bee Gees', genre: 'Motown/Funk/Soul' },
  { title: 'Sugar Pie, Honey Bunch', artist: 'Four Tops', genre: 'Motown/Funk/Soul' },
  { title: 'Take Me To The River', artist: 'Al Green', genre: 'Motown/Funk/Soul' },
  { title: 'Tears of a Clown', artist: 'Smokey Robinson', genre: 'Motown/Funk/Soul' },
  { title: 'The Best', artist: 'Tina Turner', genre: 'Motown/Funk/Soul' },
  { title: 'This is How We Do It', artist: 'Montell Jordan', genre: 'Motown/Funk/Soul' },
  { title: "What's Going On", artist: 'Marvin Gaye', genre: 'Motown/Funk/Soul' },
  { title: 'You Are The Sunshine of My Life', artist: 'Stevie Wonder', genre: 'Motown/Funk/Soul' },
  { title: 'You Send Me', artist: 'Sam Cooke', genre: 'Motown/Funk/Soul' },
  { title: 'Your Love (Keeps Lifting Me Higher)', artist: 'Jackie Wilson', genre: 'Motown/Funk/Soul' },

  // Rock
  { title: "Ain't It Fun", artist: 'Paramore', genre: 'Rock' },
  { title: 'All These Things That I\'ve Done', artist: 'The Killers', genre: 'Rock' },
  { title: 'Are You Gonna Be My Girl', artist: 'Jet', genre: 'Rock' },
  { title: 'Come Together', artist: 'Beatles', genre: 'Rock' },
  { title: 'Crazy Little Thing Called Love', artist: 'Queen', genre: 'Rock' },
  { title: "Don't Stop Believin'", artist: 'Journey', genre: 'Rock' },
  { title: 'Dreams', artist: 'Fleetwood Mac', genre: 'Rock' },
  { title: 'Everywhere', artist: 'Fleetwood Mac', genre: 'Rock' },
  { title: 'Feel It Still', artist: 'Portugal. The Man', genre: 'Rock' },
  { title: 'Fire On The Mountain', artist: 'Grateful Dead', genre: 'Rock' },
  { title: 'Footloose', artist: 'Kenny Loggins', genre: 'Rock' },
  { title: 'Give Me One Reason', artist: 'Tracy Chapman', genre: 'Rock' },
  { title: 'Good Times, Bad Times', artist: 'Led Zeppelin', genre: 'Rock' },
  { title: "I Can't Get No (Satisfaction)", artist: 'Rolling Stones', genre: 'Rock' },
  { title: "I Don't Need No Doctor", artist: 'John Mayer', genre: 'Rock' },
  { title: "Jessie's Girl", artist: 'Rick Springfield', genre: 'Rock' },
  { title: "Livin' on a Prayer", artist: 'Bon Jovi', genre: 'Rock' },
  { title: 'Message in a Bottle', artist: 'The Police', genre: 'Rock' },
  { title: 'Miami 2017', artist: 'Billy Joel', genre: 'Rock' },
  { title: 'Mr. Brightside', artist: 'The Killers', genre: 'Rock' },
  { title: 'My Wish', artist: 'Rascal Flatts', genre: 'Rock' },
  { title: 'Ophelia', artist: 'The Band', genre: 'Rock' },
  { title: 'Our House', artist: 'CSNY', genre: 'Rock' },
  { title: 'Santeria', artist: 'Sublime', genre: 'Rock' },
  { title: 'Saw Her Standing There', artist: 'Beatles', genre: 'Rock' },
  { title: 'Sex on Fire', artist: 'Kings of Leon', genre: 'Rock' },
  { title: 'Shut Up and Dance', artist: 'Walk The Moon', genre: 'Rock' },
  { title: 'Twist & Shout', artist: 'Beatles', genre: 'Rock' },
  { title: 'Use Me', artist: 'Bill Withers', genre: 'Rock' },
  { title: 'Use Somebody', artist: 'Kings of Leon', genre: 'Rock' },
  { title: 'What I Got', artist: 'Sublime', genre: 'Rock' },
  { title: 'What Is and What Should Never Be', artist: 'Led Zeppelin', genre: 'Rock' },
  { title: 'Whole Lotta Love', artist: 'Led Zeppelin', genre: 'Rock' },
  { title: "You Can't Always Get What You Want", artist: 'Rolling Stones', genre: 'Rock' },
  { title: 'You Shook Me', artist: 'AC/DC', genre: 'Rock' },
  { title: 'Your Love', artist: 'The Outfield', genre: 'Rock' },
  { title: "You're My Best Friend", artist: 'Queen', genre: 'Rock' },
  { title: 'Zombie', artist: 'Cranberries', genre: 'Rock' },

  // Ballads/Jazz
  { title: 'A Change is Gonna Come', artist: 'Sam Cooke', genre: 'Ballads/Jazz' },
  { title: 'All Of Me', artist: 'John Legend', genre: 'Ballads/Jazz' },
  { title: 'All Of Me', artist: 'Jazz Standard', genre: 'Ballads/Jazz' },
  { title: 'At Last', artist: 'Etta James', genre: 'Ballads/Jazz' },
  { title: 'Bridge Over Troubled Water', artist: 'Simon & Garfunkel', genre: 'Ballads/Jazz' },
  { title: "Don't Know Why", artist: 'Norah Jones', genre: 'Ballads/Jazz' },
  { title: "Feel Like Makin' Love", artist: "D'Angelo", genre: 'Ballads/Jazz' },
  { title: 'Fly Me To The Moon', artist: 'Frank Sinatra', genre: 'Ballads/Jazz' },
  { title: 'Georgia on My Mind', artist: 'Ray Charles', genre: 'Ballads/Jazz' },
  { title: 'Harvest Moon', artist: 'Neil Young', genre: 'Ballads/Jazz' },
  { title: "Can't Help Falling in Love", artist: 'Elvis', genre: 'Ballads/Jazz' },
  { title: "I Can't Help It", artist: 'Michael Jackson', genre: 'Ballads/Jazz' },
  { title: "I'm Not the Only One", artist: 'Sam Smith', genre: 'Ballads/Jazz' },
  { title: "If I Ain't Got You", artist: 'Alicia Keys', genre: 'Ballads/Jazz' },
  { title: 'In My Life', artist: 'Beatles', genre: 'Ballads/Jazz' },
  { title: 'Into The Mystic', artist: 'Van Morrison', genre: 'Ballads/Jazz' },
  { title: 'Jesus, Etc.', artist: 'Wilco', genre: 'Ballads/Jazz' },
  { title: 'Just The Way You Are', artist: 'Billy Joel', genre: 'Ballads/Jazz' },
  { title: 'Killing Me Softly', artist: 'Fugees', genre: 'Ballads/Jazz' },
  { title: 'L-O-V-E', artist: 'Nat King Cole', genre: 'Ballads/Jazz' },
  { title: 'Landslide', artist: 'Fleetwood Mac', genre: 'Ballads/Jazz' },
  { title: 'Make You Feel My Love', artist: 'Adele', genre: 'Ballads/Jazz' },
  { title: 'Moondance', artist: 'Van Morrison', genre: 'Ballads/Jazz' },
  { title: 'New York, New York', artist: 'Frank Sinatra', genre: 'Ballads/Jazz' },
  { title: 'Shallow', artist: 'Lady Gaga', genre: 'Ballads/Jazz' },
  { title: "Sittin' on the Dock of the Bay", artist: 'Otis Redding', genre: 'Ballads/Jazz' },
  { title: 'Something in the Way She Moves', artist: 'James Taylor', genre: 'Ballads/Jazz' },
  { title: 'Stand By Me', artist: 'Ben E. King', genre: 'Ballads/Jazz' },
  { title: 'Summertime', artist: 'Jazz Standard', genre: 'Ballads/Jazz' },
  { title: 'Thinking Out Loud', artist: 'Ed Sheeran', genre: 'Ballads/Jazz' },
  { title: 'Unchained Melody', artist: 'Righteous Brothers', genre: 'Ballads/Jazz' },
  { title: 'What A Wonderful World', artist: 'Louis Armstrong', genre: 'Ballads/Jazz' },
  { title: 'When We Were Young', artist: 'Adele', genre: 'Ballads/Jazz' },
  { title: 'You Are The Sunshine of My Life', artist: 'Stevie Wonder', genre: 'Ballads/Jazz' },

  // Reggae & More
  { title: 'Could You Be Loved', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'Is This Love', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'No Woman, No Cry', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'Stir It Up', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'Three Little Birds', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'Waiting in Vain', artist: 'Bob Marley', genre: 'Reggae & More' },
  { title: 'Them Changes', artist: 'Buddy Miles', genre: 'Reggae & More' },
  { title: 'Wake Me Up', artist: 'Avicii', genre: 'Reggae & More' },
]
```

**Step 2: Commit**

```bash
git add src/data/songs.ts
git commit -m "feat: add song list data file with 180+ songs"
```

---

### Task 2: Create Song List Page

**Files:**
- Create: `src/app/wedding-band-song-list/page.tsx`
- Create: `src/app/wedding-band-song-list/content.tsx`

**Step 1: Create the server page component with metadata**

`src/app/wedding-band-song-list/page.tsx`:
```tsx
import type { Metadata } from 'next'
import SongListContent from './content'
import Link from 'next/link'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'NYC Wedding Band Song List | Blue Avenue Groove',
  description:
    "Browse Blue Avenue Groove's full song list — 180+ songs spanning Funk, Soul, Pop, R&B, Motown, Rock, and Jazz. NYC's premier wedding band. Custom requests welcome.",
  alternates: {
    canonical: 'https://www.blueavenuegroove.com/wedding-band-song-list/',
  },
}

export default function SongListPage() {
  return (
    <div id="wrapper" className="page">
      <PageNav />
      <div className="page-panel">
        <SongListContent />
        <Link href="/" className="button">Back to Home</Link>
      </div>
    </div>
  )
}
```

**Step 2: Create the client content component**

`src/app/wedding-band-song-list/content.tsx`:
```tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { songs, genres } from '@/data/songs'

export default function SongListContent() {
  return (
    <>
      <h1 className="major">Song List</h1>
      <p>
        From Motown classics to today&apos;s biggest hits, we bring over 200+ songs spanning
        Funk, Soul, Pop, R&amp;B, Rock, Jazz, and more. Don&apos;t see your must-have song?
        We learn requests &mdash; <Link href="/contact">get in touch</Link> and we&apos;ll
        make it happen.
      </p>

      {genres.map((genre) => {
        const genreSongs = songs.filter((s) => s.genre === genre)
        return (
          <section key={genre}>
            <h2 className="major">{genre}</h2>
            <table>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                </tr>
              </thead>
              <tbody>
                {genreSongs.map((song, i) => (
                  <tr key={`${song.title}-${song.artist}-${i}`}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )
      })}

      <p>
        <strong>Don&apos;t see your song?</strong> We learn requests for your special day.
      </p>
      <p>
        <Link href="/contact" className="button special">Request a Song</Link>
      </p>
    </>
  )
}
```

**Step 3: Run dev server and verify**

```bash
yarn dev
```

Visit `http://localhost:3000/wedding-band-song-list` — confirm page loads with all genres and songs.

**Step 4: Commit**

```bash
git add src/app/wedding-band-song-list/page.tsx src/app/wedding-band-song-list/content.tsx
git commit -m "feat: add /wedding-band-song-list page with genre sections"
```

---

### Task 3: Update Internal Links

**Files:**
- Modify: `src/components/EventServices.tsx:59-61`
- Modify: `src/components/Footer.tsx:55-60`
- Modify: `src/app/the-ultimate-wedding-band-guide/content.tsx:61`

**Step 1: Replace Google Sheet link in EventServices**

In `src/components/EventServices.tsx`, replace lines 59-61:
```tsx
// OLD:
<a href="https://docs.google.com/spreadsheets/d/...">
  <button>Repertoire</button>
</a>

// NEW:
<Link href="/wedding-band-song-list">
  <button>Song List</button>
</Link>
```

**Step 2: Add Song List link to Footer**

In `src/components/Footer.tsx`, add to the links div (around line 55-60):
```tsx
// OLD:
<div style={{ textAlign: 'center' }}>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Link href="/wedding-bands-nyc">NYC Weddings</Link>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Link href="/brooklyn-wedding-bands">Brooklyn Weddings</Link>
</div>

// NEW:
<div style={{ textAlign: 'center' }}>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Link href="/wedding-bands-nyc">NYC Weddings</Link>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Link href="/brooklyn-wedding-bands">Brooklyn Weddings</Link>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Link href="/wedding-band-song-list">Song List</Link>
</div>
```

**Step 3: Add link in blog guide**

In `src/app/the-ultimate-wedding-band-guide/content.tsx`, update the repertoire range bullet (line 61):
```tsx
// OLD:
<strong>Repertoire range.</strong> You want a band that can move between Motown
and Top 40 and make both feel natural.

// NEW:
<strong><Link href="/wedding-band-song-list">Repertoire range.</Link></strong> You want a band that can move between Motown
and Top 40 and make both feel natural.
```

**Step 4: Run dev server and verify all 3 links work**

```bash
yarn dev
```

- Visit `/services` — "Song List" button links to `/wedding-band-song-list`
- Visit homepage — footer "Song List" link works
- Visit `/the-ultimate-wedding-band-guide` — "Repertoire range" links to song list

**Step 5: Commit**

```bash
git add src/components/EventServices.tsx src/components/Footer.tsx src/app/the-ultimate-wedding-band-guide/content.tsx
git commit -m "feat: replace Google Sheet link with internal song list links"
```

---

### Task 4: Build and Verify

**Step 1: Run production build**

```bash
yarn build
```

Verify: no errors, `out/wedding-band-song-list/index.html` exists in the static export.

**Step 2: Verify sitemap includes new page**

Check that `out/sitemap.xml` contains `https://www.blueavenuegroove.com/wedding-band-song-list`.

**Step 3: Commit if any build-related fixes needed**
