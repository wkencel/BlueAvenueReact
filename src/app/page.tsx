'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [loading, setLoading] = useState('is-loading')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading('')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`body ${loading}`}>
      <div id="wrapper">
        <Header />
        <Footer />
      </div>
      <div id="bg"></div>
    </div>
  )
}
