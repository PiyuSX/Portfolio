"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Instagram, Github, Facebook, Linkedin, AtSign, Laptop, Server, Database, Cloud } from 'lucide-react'
import { Card } from "@/components/ui/card"
import CountUp from "react-countup"
import { useMemo } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/jr.devpiyusx/", label: "Instagram" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/PiyuSX", label: "GitHub" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=100046118313054", label: "Facebook" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <AtSign className="h-5 w-5" />, href: "#", label: "Email" },
  ]

  const stats = [
    { number: 35, label: "Projects" },
    { number: 11, label: "Happy Clients" },
    { number: 5, label: "Certifications" },
    { number: 1, label: "Years of Experience" },
  ]
  const programmingIcons = [
      { name: 'React', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={16} height={16} /> },
      { name: 'C++', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width={16} height={16} /> },
      { name: 'React', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={16} height={16} /> },
      { name: 'Redux', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" width={16} height={16} /> },
      { name: 'Go', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" width={16} height={16} /> },
      { name: 'Node.js', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={16} height={16} /> },
      { name: 'Express', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width={16} height={16} /> },
      { name: 'MongoDB', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={16} height={16} /> },
      { name: 'Vite', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width={16} height={16} /> },
      { name: 'Vue.js', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width={16} height={16} /> },    
    { name: 'Node.js', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={16} height={16} /> },
    { name: 'JavaScript', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={16} height={16} /> },
    { name: 'Python', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={16} height={16} /> },
    { name: 'Java', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width={16} height={16} /> },
    { name: 'PHP', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={16} height={16} /> },
    { name: 'Go', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" width={16} height={16} /> },
    { name: 'TypeScript', icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={16} height={16} /> },
  ]

  const randomIcons = useMemo(() => {
    return [...programmingIcons].sort(() => 0.5 - Math.random()).slice(0, 4)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const statsElement = document.getElementById("stats-section")
    if (statsElement) observer.observe(statsElement)

    return () => {
      if (statsElement) observer.unobserve(statsElement)
    }
  }, [])

  return (
    <div className="grid lg:grid-cols-[400px_1fr] gap-8 py-8">
      {/* Profile Card */}
      <Card className="p-8 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-56 h-56 mb-6 lg:w-64 lg:h-64 lg:mb-12">
            {/* First Ring - Clockwise */}
            <div className="absolute inset-[-10px] rounded-full border border-gray-200 dark:border-gray-800 animate-spin-slow">
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2   p-1">
                {randomIcons[0].icon}
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  p-1">
                {randomIcons[1].icon}
              </div>
            </div>

            {/* Second Ring - Counter-clockwise */}
            <div className="absolute inset-[-20px] rounded-full border border-gray-200 dark:border-gray-800 animate-spin-reverse-slow">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  p-1 ">
                {randomIcons[2].icon}
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-1">
                {randomIcons[3].icon}
              </div>
            </div>

            {/* Profile Image */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-800"></div>
              <Image
                src="https://scontent.fbir4-1.fna.fbcdn.net/v/t39.30808-6/465859063_1142753110605289_3545862835938678317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5VA_Ajx0mzR8xkl63e83KyocsX9NcoPfKhyxf01yg99WZIUHrSs8wOE3g68JojG6qiBMdKKT9DPZxannk7IJx&_nc_ohc=fuillpUpb7IQ7kNvgHi8HtQ&_nc_oc=AdhAJz0XxN8Xlz6cRVCxr731shdp2WJHiwicLX0pkwrjzXS-BpqWw2Q1g2SoBac09pRukMezHV6INlEHY8480jfn&_nc_zt=23&_nc_ht=scontent.fbir4-1.fna&_nc_gid=AUY0xNLdCJnF0VRVyzFCRkr&oh=00_AYCwPIFbbyyvNIwkedUDLy4hBCHrNFA1-OZTPblvUdSSQw&oe=678386E5"
                alt="Piyush Rajbanshi"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            Piyush Rajbanshi <span className="wave">👋</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Full Stack Developer from Biratnagar, Nepal <span>🇳🇵</span>
          </p>
          <div className="flex gap-3 mb-6">
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
      </Card>

      {/* Content Section */}
      <div className="space-y-8">
        <Card className="p-8 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800">
          <div className="mb-6">
            <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
              👋 Greetings! I'm Piyush Rajbanshi (jrDevPiyush)
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
              Full Stack Developer from Arniko, Biratnagar
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              With over 1 year of experience, I specialize in building robust web applications using the MERN stack, Next.js, and modern web technologies. As a developer from Biratnagar, I bring a unique perspective to every project.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-gray-600 dark:text-gray-400 mb-4">Available For:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>💼</span> Freelancing
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>📨</span> Job Opportunities
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
        </Card>

        {/* Stats Section */}
        <Card
          id="stats-section"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                {isVisible && (
                  <CountUp
                    end={stat.number}
                    duration={5}
                    suffix="+"
                  />
                )}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

