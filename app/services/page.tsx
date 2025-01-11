import type { Metadata } from 'next';
import { Services } from "@/components/services";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the web development and backend services offered by Piyush Rajbanshi, including MERN stack development and cloud deployment.',
  openGraph: {
    title: 'Services by Piyush Rajbanshi | Full Stack Developer',
    description: 'Explore the web development and backend services offered by Piyush Rajbanshi, including MERN stack development and cloud deployment.',
    url: 'https://www.jrpiyush.me/services',
    images: [
      {
        url: 'https://www.jrpiyush.me/services.png', // URL for your services-specific image
        width: 1200,
        height: 630,
        alt: 'Services by Piyush Rajbanshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services by Piyush Rajbanshi | Full Stack Developer',
    description: 'Explore the web development and backend services offered by Piyush Rajbanshi, including MERN stack development and cloud deployment.',
    images: ['https://www.jrpiyush.me/services.png'], // URL for your services-specific image
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
}

