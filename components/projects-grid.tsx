"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "TechFest Web - ACES",
    description: "Unleash Innovation at ACES",
    image: "/placeholder.svg",
    category: "Web",
    technologies: ["Next.js", "Three.js", "TailwindCSS"],
  },
  {
    title: "ACES Web - IDE",
    description: "Transform Your Tech Journey with ACES",
    image: "/placeholder.svg",
    category: "Web",
    technologies: ["Next.js", "TailwindCSS"],
  },
  {
    title: "LazyKit - Open Source Toolkit",
    description: "Drop the Excess, Keep the Impact!",
    image: "/placeholder.svg",
    category: "Package/Lib",
    technologies: ["Next.js", "Vite.js", "TailwindCSS", "Markdown"],
  },
  {
    title: "Javasports - E-commerce Platform",
    description: "All new junior cricket bat range",
    image: "/placeholder.svg",
    category: "Web",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "Bumblebee 2.0 - AI Powered Chatbot",
    description: "Advanced conversational AI platform",
    image: "/placeholder.svg",
    category: "AI",
    technologies: ["Express.js", "MongoDB", "React.js", "TailwindCSS"],
  },
  {
    title: "The Umpire - Import Export Company",
    description: "Global trade solutions",
    image: "/placeholder.svg",
    category: "Freelancing",
    technologies: ["React.js", "TailwindCSS", "Next.js"],
  },
  {
    title: "Travellian - Travel Across the Globe",
    description: "Start your unforgettable journey with us",
    image: "/placeholder.svg",
    category: "Freelancing",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    title: "FSU - WebDev Competition",
    description: "Web development competition platform",
    image: "/placeholder.svg",
    category: "Web",
    technologies: ["Next.js", "TailwindCSS"],
  },
  {
    title: "Stringify - Effortless Text Manipulation",
    description: "Simple text manipulation tools",
    image: "/placeholder.svg",
    category: "Package/Lib",
    technologies: ["React.js", "HTML", "CSS"],
  },
]

const categories = ["All", "AI", "Freelancing", "Other", "Package/Lib", "Web"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Works & Projects 💼</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover a selection of projects I've crafted with precision and passion,
            showcasing creativity and technical prowess in every detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "hover:text-purple-600 hover:border-purple-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

