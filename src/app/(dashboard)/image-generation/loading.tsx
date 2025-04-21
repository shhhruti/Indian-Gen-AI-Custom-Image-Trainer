import { Skeleton } from '@/components/ui/skeleton'

export default function ImageGenerationLoading() {
  return (
    <section className='container mx-auto flex-1 grid gap-4 grid-cols-1 lg:grid-cols-3 overflow-hidden'>
      {/* Form Skeleton */}
      <div className="w-full">
        <Skeleton className="h-[600px] w-full rounded-lg" />
      </div>
      
      {/* Image Preview Skeleton */}
      <div className='col-span-2 p-0 lg:p-4 rounded-xl flex items-center justify-center h-fit'>
        <Skeleton className="aspect-square w-full max-w-2xl rounded-lg" />
      </div>
    </section>
  )
}
