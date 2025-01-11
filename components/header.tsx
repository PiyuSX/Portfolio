"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, User, Wrench, FolderGit2, Menu, X } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

export function Header() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textToType = "jrDevPiyush";
  const cursor = "|";

  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleTyping = () => {
      const currentText = textToType.substring(
        0,
        typedText.length + (isDeleting ? -1 : 1)
      );
      setTypedText(currentText);

      if (!isDeleting && currentText === textToType) {
        timeoutId = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, typingSpeed, loopNum]);

  const isActive = (href: string) => {
    return pathname === href
      ? "text-purple-600 dark:text-purple-400"
      : "text-gray-600 dark:text-gray-400";
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b lg:mx-[100px]  border-gray-200 dark:border-gray-80 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 dark:border-b-slate-800 backdrop-blur-sm transition-transform duration-300 ${
          isMenuOpen ? "hidden" : ""
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex h-16  items-center justify-between">
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
                href="/projects"
                className={`flex items-center gap-2 ${isActive("/projects")}`}
              >
                <FolderGit2 className="h-4 w-4" />
                Projects
              </Link>
            </nav>
            <div className="flex justify-end items-center gap-4">
              <ThemeToggle />

              <div className="p-4">
            <Link
            href="/contact"
            className="hidden md:block bg-purple-600 text-white text-center py-2 px-8 rounded-md hover:bg-purple-700"
            onClick={handleCloseMenu}
            >
            Contact
            </Link>
        </div>

              {/* Hamburger Button */}
              <button
                onClick={handleMenuToggle}
                className="md:hidden ml-[-40px] text-purple-600 dark:text-purple-400"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md transition-opacity ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseMenu}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-zinc-950 w-[40vw] transform transition-transform ease-in-out duration-300 z-50 flex flex-col justify-between ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleCloseMenu}
            className="text-purple-600 dark:text-purple-400"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Static Text */}
        <div className="flex justify-center items-center ">
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
            jrDevPiyush
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-6">
          <Link
            href="/"
            className={`flex items-center gap-4 ${isActive("/")}`}
            onClick={handleCloseMenu}
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/about"
            className={`flex items-center gap-4 ${isActive("/about")}`}
            onClick={handleCloseMenu}
          >
            <User className="h-5 w-5" />
            About
          </Link>
          <Link
            href="/services"
            className={`flex items-center gap-4 ${isActive("/services")}`}
            onClick={handleCloseMenu}
          >
            <Wrench className="h-5 w-5" />
            Services
          </Link>
          <Link
            href="/projects"
            className={`flex items-center gap-4 ${isActive("/projects")}`}
            onClick={handleCloseMenu}
          >
            <FolderGit2 className="h-5 w-5" />
            Projects
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="p-4">
          <Link
            href="/contact"
            className="block bg-purple-600 text-white text-center py-2 rounded-md hover:bg-purple-700"
            onClick={handleCloseMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

