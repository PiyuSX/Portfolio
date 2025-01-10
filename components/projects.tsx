import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "TechFest Web - ACES",
      image: "/placeholder.svg",
      tags: ["Next.js", "React", "TailwindCSS"],
    },
    {
      title: "ACES Web - IDE",
      image: "/placeholder.svg",
      tags: ["Next.js", "MongoDB", "Express.js"],
    },
    {
      title: "LogiKit - Open Source Toolkit",
      image: "/placeholder.svg",
      tags: ["React.js", "TypeScript", "TailwindCSS"],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Works & Projects 🔨</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover a selection of projects I've crafted with precision and passion,
          showcasing creativity and technical prowess in every detail.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden transition-colors">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

