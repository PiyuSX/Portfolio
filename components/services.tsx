"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Services() {
  const webDevTechnologies = [
    { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  ]

  const backendTechnologies = [
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  ]

  const webDevFeatures = [
    "Cutting-Edge Technologies",
    "No Compromise on Quality",
    "Privacy and Security Focused",
    "User-Centric Design and Scalable Solutions",
    "Timely Delivery and Comprehensive Testing",
    "Innovative Problem-Solving",
    "and much more..."
  ]

  const backendFeatures = [
    "Scalable Architecture",
    "Performance Optimization",
    "Data Security and Compliance",
    "Robust API Development",
    "Error-free Testing",
    "Error Handling and Monitoring",
    "Dockerization and Cloud Deployment",
    "CI/CD pipelines",
    "and much more..."
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Services</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Web Development Card */}
          <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="https://www.svgrepo.com/show/485018/web-page-browser-analysis-screen.svg"
                    alt="Web Development"
                    width={48}
                    height={48}
                    className="rounded"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3">Web Development</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I build dynamic and responsive web applications that not only look great but also provide seamless user experiences.
                </p>
                <ul className="space-y-2 mb-8">
                  {webDevFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-orange-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                {webDevTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group"
                  >
                    <img
                      src={`${tech.icon}/000000`}
                      alt={tech.name}
                      className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity dark:hidden"
                    />
                    <img
                      src={`${tech.icon}/FFFFFF`}
                      alt={tech.name}
                      className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity hidden dark:block"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Development Card */}
          <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="https://www.svgrepo.com/show/375397/compute-engine.svg"
                    alt="Backend Development"
                    width={48}
                    height={48}
                    className="rounded"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3">Backend Development</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I specialize in creating scalable APIs and server-side architectures that ensure your web applications run smoothly and securely.
                </p>
                <ul className="space-y-2 mb-8">
                  {backendFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-orange-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                {backendTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group"
                  >
                    <img
                      src={`${tech.icon}/000000`}
                      alt={tech.name}
                      className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity dark:hidden"
                    />
                    <img
                      src={`${tech.icon}/FFFFFF`}
                      alt={tech.name}
                      className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity hidden dark:block"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for Some Web Magic? ✨</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether it's crafting innovative web solutions or pushing the limits of what's possible, I'm here to make it happen. Open
            to freelance work, collaborations, or even full-time roles—let's create something extraordinary together!
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white dark:text-white">
              Let's Make Magic <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

