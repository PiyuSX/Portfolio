"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Twitter, Linkedin, Github, AtSign, Code2 } from 'lucide-react'

export function Hero() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <AtSign className="h-5 w-5" />, href: "#", label: "Email" },
    { icon: <Code2 className="h-5 w-5" />, href: "#", label: "Portfolio" },
  ]

  return (
    <div className="grid md:grid-cols-[450px_1fr] gap-12 py-8">
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 transition-colors">
        <div className="relative w-80 h-80 mb-6">
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-800 transition-colors"></div>
            <Image
              src="https://scontent.fbir4-1.fna.fbcdn.net/v/t39.30808-6/465859063_1142753110605289_3545862835938678317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5VA_Ajx0mzR8xkl63e83KyocsX9NcoPfKhyxf01yg99WZIUHrSs8wOE3g68JojG6qiBMdKKT9DPZxannk7IJx&_nc_ohc=fuillpUpb7IQ7kNvgHi8HtQ&_nc_oc=AdhAJz0XxN8Xlz6cRVCxr731shdp2WJHiwicLX0pkwrjzXS-BpqWw2Q1g2SoBac09pRukMezHV6INlEHY8480jfn&_nc_zt=23&_nc_ht=scontent.fbir4-1.fna&_nc_gid=AUY0xNLdCJnF0VRVyzFCRkr&oh=00_AYCwPIFbbyyvNIwkedUDLy4hBCHrNFA1-OZTPblvUdSSQw&oe=678386E5"
              alt="Piyush Rajbanshi"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
          Piyush Rajbanshi <span className="wave">👋</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center gap-2">
          Crafting Web Solutions with 1+ Years of Expertise <span>🔥</span>
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-3 rounded-lg transition-colors bg-white border border-gray-200 hover:border-purple-200 dark:bg-[#111] dark:border-gray-800 dark:hover:border-purple-900 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 rounded-xl bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800 transition-colors">
        <div className="mb-4 flex items-center gap-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          <span>👋</span> Greetings! I'm Piyush Rajbanshi (jrPiyush)
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
          MERN stack developer with 1+ years of experience building web apps using Next.js, Docker, and AWS cloud deployment.
        </h1>
        <div className="mb-8">
          <h3 className="text-gray-600 dark:text-gray-400 mb-4">Available For:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>💼</span> Freelancing
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📨</span> Job Offer
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>🤝</span> Collaborations
            </li>
          </ul>
        </div>
        <Button 
          size="lg" 
          className="w-fit bg-purple-600 hover:bg-purple-700 text-white px-6 dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
        >
          Download CV <Download className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

