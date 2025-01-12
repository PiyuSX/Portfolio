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
    description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Biratnagar. Specializing in MERN stack and Next.js development.',
    images: [
      {
        url: '/profile.jpg',  // Use profile.jpg for search engine preview
        width: 1200,
        height: 630,
        alt: 'Piyush Rajbanshi Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Rajbanshi - Full Stack Developer from Biratnagar',
    description: 'Piyush Rajbanshi (jrDevPiyush) is a skilled full-stack developer from Arniko, Biratnagar. Specializing in MERN stack and Next.js development.',
    images: ['/favicon-32x32.png'],  // Use favicon as logo
    creator: '@jrDevPiyush',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ],
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
              image: "/favicon-32x32.png",  // Use favicon as the profile image
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
