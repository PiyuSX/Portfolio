import type { Metadata } from 'next';
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Piyush Rajbanshi for web development projects, collaborations, or job opportunities.',
  openGraph: {
    title: 'Contact Piyush Rajbanshi | Full Stack Developer',
    description: 'Get in touch with Piyush Rajbanshi for web development projects, collaborations, or job opportunities.',
    url: 'https://www.jrpiyush.me/contact',
    images: [
      {
        url: 'https://www.jrpiyush.me/contact.png', // URL of the image for the contact page
        width: 1200,
        height: 630,
        alt: 'Contact Piyush Rajbanshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Piyush Rajbanshi | Full Stack Developer',
    description: 'Get in touch with Piyush Rajbanshi for web development projects, collaborations, or job opportunities.',
    images: ['https://www.jrpiyush.me/contact.png'], // URL of the image for the contact page
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

