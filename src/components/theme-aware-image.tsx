"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

interface ThemeAwareImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  // ... other Image props
}

export function ThemeAwareImage({ lightSrc, darkSrc, alt, ...props }: ThemeAwareImageProps) {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === "dark" ? darkSrc : lightSrc}
      alt={alt}
      {...props}
    />
  )
}