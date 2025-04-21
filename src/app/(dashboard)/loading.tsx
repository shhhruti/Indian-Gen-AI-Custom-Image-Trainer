import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="container mx-auto space-y-6 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>

      {/* Content Skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        <div className="col-span-full xl:col-span-3">
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
        <div className="col-span-full xl:col-span-1 space-y-6">
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
