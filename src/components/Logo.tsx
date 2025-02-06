import React from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
function Logo() {
  return (
   <Link href="/" className='flex items-center gap-2'>
    <Sparkles className="size-8" strokeWidth={1.5}/>
    <span> Indian Gen AI Platform </span>
   </Link>
  )
}

export default Logo