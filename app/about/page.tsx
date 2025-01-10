import type { Metadata } from 'next'
import { About } from "@/components/about"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'About Piyush Rajbanshi - Full Stack Developer',
  description: 'Learn more about Piyush Rajbanshi, his experience, skills, and journey as a full-stack web developer.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}

