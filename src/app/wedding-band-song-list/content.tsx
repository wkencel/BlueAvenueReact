'use client'

import React from 'react'
import Link from 'next/link'
import { songs, genres } from '@/data/songs'

export default function SongListContent() {
  return (
    <>
      <h1 className="major">Song List</h1>
      <p>
        From Motown classics to today&apos;s biggest hits, we bring over 180 songs spanning
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
        <Link href="/contact" className="button special">
          Request a Song
        </Link>
      </p>
    </>
  )
}
