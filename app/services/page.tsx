import type { Metadata } from 'next'
import { Services } from "@/components/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the web development and backend services offered by Piyush Rajbanshi, including MERN stack development and cloud deployment.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  )
}

