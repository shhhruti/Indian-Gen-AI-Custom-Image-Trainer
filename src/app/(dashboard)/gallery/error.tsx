'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function GalleryError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Gallery page error:', error)
  }, [error])

  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold">Gallery Error</h2>
      <p className="text-muted-foreground">
        There was a problem loading your gallery. Please try again.
      </p>
      <div className="flex gap-2">
        <Button
          onClick={() => reset()}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/dashboard'}
          variant="outline"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  )
}
