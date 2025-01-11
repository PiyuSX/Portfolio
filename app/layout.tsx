import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Piyush Rajbanshi - Full Stack Developer from Biratnagar',
    template: '%s | Piyush Rajbanshi'
  },
  description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Arniko, Biratnagar. Specializing in MERN stack and Next.js development.',
  keywords: [
    'Piyush', 'JrdevPiyush', 'Developer Piyush', 'Piyush Rajbanshi', 
    'Piyush from Arniko', 'Piyush from Biratnagar', 'Piyush Biratnagar', 
    'Full Stack Developer', 'MERN Stack', 'Next.js'
  ],
  authors: [{ name: 'Piyush Rajbanshi' }],
  creator: 'Piyush Rajbanshi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jrpiyush.me/',
    siteName: 'Piyush Rajbanshi - Full Stack Developer',
    title: 'Piyush Rajbanshi - Full Stack Developer from Biratnagar',
    description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Arniko, Biratnagar. Specializing in MERN stack and Next.js development.',
    images: [
      {
        url: 'https://www.jrpiyush.me/site.png', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Portfolio preview of Piyush Rajbanshi - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Rajbanshi - Full Stack Developer from Biratnagar',
    description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Arniko, Biratnagar. Specializing in MERN stack and Next.js development.',
    images: ['https://www.jrpiyush.me/site.png'], // Use the same image URL
    creator: '@jrDevPiyush',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.jrpiyush.me/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* JSON-LD Schema */}
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Piyush Rajbanshi",
              alternateName: "jrDevPiyush",
              description: "Full Stack Developer specializing in MERN stack and Next.js",
              url: "https://www.jrpiyush.me/",
              sameAs: [
                "https://twitter.com/jrDevPiyush",
                "https://www.linkedin.com/in/piyush-rajbanshi/",
                "https://github.com/piyusx"
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Arniko Awasiya H.S, Biratnagar"
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Biratnagar",
                addressRegion: "Province 1",
                addressCountry: "Nepal"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
