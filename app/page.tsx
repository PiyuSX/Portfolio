import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Expertise } from '@/components/expertise'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
// import { TrustedBy } from '@/components/trusted-by'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Piyush | A Full-Stack Developer',
  description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Arniko, Biratnagar. Specializing in MERN stack, Next.js, and web development.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pt-16">
        <Hero />
        {/* <TrustedBy /> */}
        <Expertise />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

