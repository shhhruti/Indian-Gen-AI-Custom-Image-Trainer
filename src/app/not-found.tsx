import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-4xl font-bold">404</h2>
      <h3 className="text-2xl font-semibold">Page Not Found</h3>
      <p className="text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-2">
        <Link href="/">
          <Button variant="default">Go to Home</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
