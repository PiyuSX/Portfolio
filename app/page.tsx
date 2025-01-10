import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
// import { Stats } from '@/components/stats'
import { Expertise } from '@/components/expertise'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
// import { TrustedBy } from '@/components/trusted-by'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pt-16">
        <Hero />
        {/* <Stats /> */}
        {/* <TrustedBy />  */}
        <Expertise />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

