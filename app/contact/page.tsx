import type { Metadata } from 'next'
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Contact Piyush Rajbanshi',
  description: 'Get in touch with Piyush Rajbanshi for web development projects, collaborations, or job opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

