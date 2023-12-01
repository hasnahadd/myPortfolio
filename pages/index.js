import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import About from '@/components/About'
import Project from '@/components/Project'
import Tech from '@/components/Tech'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col container mx-auto px-12 py-4'  
    >
           <NavBar/>
            <Hero/>
           <About/>
           <Tech/>
           <Project/>
    </main>
  )
}