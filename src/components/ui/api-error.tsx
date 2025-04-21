'use client'

import { Button } from './button'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './alert'

interface ApiErrorProps {
  title?: string
  description?: string
  error?: Error | string | null
  reset?: () => void
}

export function ApiError({
  title = 'Something went wrong',
  description = 'There was a problem with your request.',
  error,
  reset,
}: ApiErrorProps) {
  return (
    <Alert variant="destructive" className="my-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-2">
        <div className="mb-2">
          {description}
          {error && (
            <div className="mt-2 rounded-md bg-destructive/10 p-2 text-xs text-destructive">
              {error instanceof Error ? error.message : error}
            </div>
          )}
        </div>
        {reset && (
          <Button
            variant="outline"
            size="sm"
            onClick={reset}
            className="mt-2"
          >
            Try again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  )
}
