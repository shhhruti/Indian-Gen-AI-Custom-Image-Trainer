import { Skeleton } from '@/components/ui/skeleton'

export default function GalleryLoading() {
  return (
    <div className="container mx-auto space-y-6 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Gallery Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
        <Skeleton className="aspect-square w-full rounded-lg" />
      </div>
    </div>
  )
}
