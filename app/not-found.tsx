'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [showRealGoBack, setShowRealGoBack] = useState(false)
  const [message, setMessage] = useState("Oops! The page you're looking for doesn't exist.")

  const handlePlayVideo = () => {
    setVideoPlaying(true)
    setShowRealGoBack(true) // Show the real "Go back home" button after clicking the fake one
    setMessage("Now My Cat will Entertain you buddy!") // Change the message text
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">{message}</p>
        <div className="relative mb-8">
          {videoPlaying ? (
            <video
              width="560"
              height="315"
              autoPlay
              loop
              muted={false} // Sound enabled
              className="rounded-lg shadow-lg"
            >
              <source src="/404video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Button
              onClick={handlePlayVideo}
              className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            >
              Go back home
            </Button>
          )}
        </div>
        
        {/* Show the real "Go back home" button after the video starts */}
        {showRealGoBack && (
          <Link href="/">
            <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white">
              Go back home
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
