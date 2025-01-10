"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, User, Wrench, FolderGit2 } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function Header() {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const textToType = "jrDevPiyush"
  const cursor = "|"

  const pathname = usePathname()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleTyping = () => {
      const currentText = textToType.substring(
        0,
        typedText.length + (isDeleting ? -1 : 1)
      )
      setTypedText(currentText)

      if (!isDeleting && currentText === textToType) {
        timeoutId = setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }

      setTypingSpeed(isDeleting ? 50 : 150)
    }

    timeoutId = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timeoutId)
  }, [typedText, isDeleting, typingSpeed, loopNum])

  const isActive = (href: string) => {
    return pathname === href
      ? "text-purple-600 dark:text-purple-400"
      : "text-gray-600 dark:text-gray-400"
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex h-16 items-center justify-between">
          <div className="w-32">
            <Link
              href="/"
              className="text-xl font-bold text-purple-600 dark:text-purple-400"
            >
              {typedText}
              <span className="animate-blink">{cursor}</span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 px-4">
            <Link
              href="/"
              className={`flex items-center gap-2 ${isActive("/")}`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/about"
              className={`flex items-center gap-2 ${isActive("/about")}`}
            >
              <User className="h-4 w-4" />
              About
            </Link>
            <Link
              href="/services"
              className={`flex items-center gap-2 ${isActive("/services")}`}
            >
              <Wrench className="h-4 w-4" />
              Services
            </Link>
            <Link
              href="/#projects"
              className={`flex items-center gap-2 ${isActive("/#projects")}`}
            >
              <FolderGit2 className="h-4 w-4" />
              Projects
            </Link>
          </nav>

          <div className="flex justify-end items-center gap-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-purple-600 dark:text-purple-400"
            >
              <div className="w-6 h-1 bg-current mb-1"></div>
              <div className="w-6 h-1 bg-current mb-1"></div>
              <div className="w-6 h-1 bg-current"></div>
            </button>

            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 dark:text-white dark:bg-purple-600 dark:hover:bg-purple-700">
                Contact
              </Button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 p-4">
            <Link
              href="/"
              className={`block mb-2 ${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block mb-2 ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block mb-2 ${isActive("/services")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className={`block mb-2 ${isActive("/#projects")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

