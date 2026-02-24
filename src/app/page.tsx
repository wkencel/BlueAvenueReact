'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcasePopup from '@/components/ShowCasePopup'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 325)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`body ${isLoading ? 'is-loading' : ''}`}>
      <div id="wrapper">
        <Header timeout={isLoading} />
        <Footer timeout={isLoading} />
      </div>
      <div id="bg"></div>
      <ShowcasePopup />
    </div>
  )
}
