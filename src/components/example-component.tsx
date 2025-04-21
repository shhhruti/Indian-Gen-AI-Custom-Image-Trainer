"use client"

import { useTheme } from "next-themes"

export function ExampleComponent() {
  const { theme } = useTheme()

  return (
    <div className="bg-background text-foreground dark:bg-slate-900 dark:text-white">
      {/* Your component content */}
    </div>
  )
}