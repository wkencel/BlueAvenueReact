'use client'

import React from 'react'
import { ContextProvider } from '@/context/context'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ContextProvider>{children}</ContextProvider>
}
