"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  githubLink: string
  visitLink: string
}

const projects: Project[] = [
  {
    title: "Portfolio - Nitish",
    description: "A portfolio website for Nitish, a full-stack developer, showcasing his projects and skills.",
    image: "/nitishcodes.png",
    category: "Frontend",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    githubLink: "https://github.com/PiyuSX/Portfolio-Nitish",
    visitLink: "https://www.nitish.codes/",
  },
  {
    title: "3D Portfolio",
    description: "A portfolio website for Nitish, a full-stack developer, showcasing his projects and skills.",
    image: "/threejs.png",
    category: "3D Website",
    technologies: ["React", "Three.js", "TailwindCSS"],
    githubLink: "https://github.com/your-repo",
    visitLink: "https://www.piyux.xyz/",
  },
  {
    title: "Arnikans - Club Website",
    description: "A website for Arnikans, a student club, showcasing their events and activities.",
    image: "/arnikans.png",
    category: "Full stack",
    technologies: ["React.js", "TypeScript", "TailwindCSS", "Superbase", "Node.js", "Express.js"],
    githubLink: "https://github.com/PiyuSX/Arnikans-Website",
    visitLink: "https://www.arnikans.tech/",
  },
  {
    title: "Arnikans - Domain Registration",
    description: "A website that provides free domain to students",
    image: "/getarnikans.png",
    category: "Full stack",
    technologies: ["React.js", "TypeScript", "TailwindCSS", "Superbase", "Node.js", "Express.js"],
    githubLink: "https://github.com/PiyuSX/Arnikans-Website",
    visitLink: "https://www.get.arnikans.tech/",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

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
              className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-700 dark:text-gray-200 transition-colors hover:text-purple-500 dark:hover:text-purple-500"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit"
                    className="text-gray-700 dark:text-gray-200 transition-colors hover:text-purple-500 dark:hover:text-purple-500"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
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
