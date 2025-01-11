import type { Metadata } from 'next';
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Piyush Rajbanshi, his experience, skills, and journey as a full-stack web developer.',
  openGraph: {
    title: 'About Piyush Rajbanshi | Full Stack Developer',
    description: 'Learn more about Piyush Rajbanshi, his experience, skills, and journey as a full-stack web developer.',
    url: 'https://www.jrpiyush.me/about',
    images: [
      {
        url: 'https://www.jrpiyush.me/about.png', // Replace this with the actual URL of your "about.png" image
        width: 1200,
        height: 630,
        alt: 'About Piyush Rajbanshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Piyush Rajbanshi | Full Stack Developer',
    description: 'Learn more about Piyush Rajbanshi, his experience, skills, and journey as a full-stack web developer.',
    images: ['https://www.jrpiyush.me/about.png'], // Replace this with the actual URL of your "about.png" image
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}



