import type { Metadata } from 'next';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, including full-stack applications, open-source contributions, and client work.',
  openGraph: {
    title: 'Projects by Piyush Rajbanshi | Full Stack Developer',
    description: 'Explore my portfolio of web development projects, including full-stack applications, open-source contributions, and client work.',
    url: 'https://www.jrpiyush.me/projects',
    images: [
      {
        url: 'https://www.jrpiyush.me/projects.png', // URL for your projects image
        width: 1200,
        height: 630,
        alt: 'Projects by Piyush Rajbanshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects by Piyush Rajbanshi | Full Stack Developer',
    description: 'Explore my portfolio of web development projects, including full-stack applications, open-source contributions, and client work.',
    images: ['https://www.jrpiyush.me/projects.png'], // URL for your projects image
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="pt-24">
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
