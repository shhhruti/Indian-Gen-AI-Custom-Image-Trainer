import React from 'react'
import AuthImg from '@/public/Abstract Curves and Colors.jpeg'
import Image from 'next/image'
import Logo from '@/components/Logo'
function Authetication() {
    return (
        <main className='h-screen grid grid-cols-2 relatives'>
            <div className='relative w-full flex flex-col bg-muted p-10 text-primary foreground'>
                <Image src={AuthImg} alt='login-img' fill className='w-full h-full object-cover' />
                <div className="relative z-20 flex items-center">
                    <Logo />
                </div>

                <div className='relative z-20 mt-auto'>
                <blockquote className='space-y-2'>
                    <p className='text-lg'>
                    &ldquo;Indian Gen AI Platform is a game changer for me. I have been able to generate high quality professional headshots within minutes. It has saved me countless hours of work and cost as well.&rdquo; 
                    </p>
                    <footer className='text-sm'> - Aditya Kumar</footer>
                </blockquote>
            </div>
            
            
            </div>
          

            <div>
                <h1>Login Page</h1>
            </div>


        </main>
    )
}

export default Authetication