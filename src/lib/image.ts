import type { StaticImageData } from 'next/image'

export function getImageSrc(img: string | StaticImageData): string {
  if (typeof img === 'string') return img
  return img.src
}
