import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Portfolio - Nitish",
      image: "/nitishcodes.png",
      tags: ["React", "TailwindCSS", "TypeScript"],
      githubLink: "https://github.com/PiyuSX/Portfolio-Nitish",
      visitLink: "https://www.nitish.codes/",
    },
    {
      title: "3D Portfolio",
      image: "/threejs.png",
      tags: ["React", "Three.js", "TailwindCSS"],
      githubLink: "https://github.com/your-repo",
      visitLink: "https://www.piyux.xyz/",
    },
    {
      title: "Arnikans - Club Website",
      image: "/arnikans.png",
      tags: ["React.js", "TypeScript", "TailwindCSS", "Superbase", "Node.js", "Express.js"],
      githubLink: "https://github.com/PiyuSX/Arnikans-Website",
      visitLink: "https://www.arnikans.tech/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Works & Projects 🔨
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover a selection of projects I've crafted with precision and passion,
          showcasing creativity and technical prowess in every detail.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden transition-colors"
          >
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
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                    >
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
  );
}

